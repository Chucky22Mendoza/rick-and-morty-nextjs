'use client';

import React, { useEffect, useState } from 'react';
import Block from '../Block';
import { getProcessData } from '@/app/actions';
import useCharacterStore from '@/store/CharactersStore';
import useInfoStore from '@/store/InfoStore';
import Character from '../Character';
import ListEvents from './ListEvents';
import CharacterLoader from '../Character/CharacterLoader';
import styles from './home.module.css';
import useLastVisitedStore from '@/store/LastVisitedStore';
import Slug from '../Character/Slug';
import SmallButton from '../ui/SmallButton';
import Image from 'next/image';
import InputFilter from '../ui/InputFilter';
import EmptySearch from './EmptySearch';

async function loadData(page: number = 1, name: string | null = null) {
  const characterState = useCharacterStore.getState();
  const infoState = useInfoStore.getState();
  characterState.setIsLoading(true);
  const data = await getProcessData(page, name);
  characterState.setCharacters(data?.results ?? []);
  characterState.setIsLoading(false);
  infoState.setInfo(data.info);
}

/**
 * Home component renders a page displaying a list of characters and last visited characters.
 * It fetches data based on the page number and optional name filter.
 *
 * @returns JSX element representing the Home component UI.
 */
function Home() {
  const characters = useCharacterStore((state) => state.characters);
  const isLoading = useCharacterStore((state) => state.isLoading);
  const maxPages = useInfoStore((state) => state.info.pages);
  const characterVisited = useLastVisitedStore((state) => state.characterVisited);
  const [page, setPage] = useState<number>(1);
  const [hint, setHint] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string | null>(null);
  const [toggleVisited, setToggleVisited] = useState<boolean>(false);

  useEffect(() => {
    setPage(1);
    setNameFilter('');
    loadData(1, '');
    setHint('');
  }, []);

  return (
    <>
      {
        characterVisited.length > 0 && (
          <Block
            blockTitle="Last visited characters"
            style={{ gap: '0' }}
            headerComponent={(
              <SmallButton
                buttonType="primary"
                iconLeft={(
                  <Image
                    src="/arrow.svg"
                    width={18}
                    height={18}
                    alt="arrow"
                    style={toggleVisited ? { transform: 'rotate(180deg)', transition: 'all .3s' } : { transform: 'rotate(0deg)', transition: 'all .3s'}}
                  />
                )}
                onClick={() => setToggleVisited(!toggleVisited)}
              />
            )}
          >
            <div className={styles.list} style={!toggleVisited ? { opacity: '0', height: '0' } : {}}>
              <div className={styles.rows}>
                {
                  characterVisited.map((character) => <Slug key={`character-slug-${character.id}`} character={character} />)
                }
              </div>
            </div>
          </Block>
        )
      }
      <Block
        blockTitle="Characters"
        isHeaderSticky
        headerComponent={(
          <>
            <InputFilter
              propsInput={{
                placeholder: "Filter by name",
                value: nameFilter ?? '',
                onKeyDown: (event: React.KeyboardEvent) => {
                  if (event.key === 'Enter') {
                    loadData(1, nameFilter);
                    setPage(1);
                    setHint(nameFilter ?? '');
                  }
                }
              }}
              onChange={setNameFilter}
              onClick={() => {
                loadData(1, nameFilter);
                setPage(1);
                setHint(nameFilter ?? '');
              }}
            />
            {
              maxPages > 0
                ? (
                  <ListEvents
                    isLoading={isLoading}
                    maxPages={maxPages}
                    page={page}
                    setPage={(value: number) => {
                      setPage(value);
                      loadData(value, nameFilter);
                    }}
                  />
                ) : null
            }
          </>
        )}
        blockTitleElement={hint && (
          <div className={styles.filter}>
            <span>{hint}</span>
            <button
              onClick={() => {
                setHint('');
                setNameFilter('');
                setPage(1);
                loadData(1);
              }}
            >
              <Image src="/close.svg" width={10} height={10} alt="close" />
            </button>
          </div>
        )}
      >
        {
          isLoading
            ? (
              <div className={styles.rows}>
                {
                  Array.from({ length: 20 }, ((_, i) => (
                    <CharacterLoader key={`skeleton-${i}`} data-testid="loader-skeleton" />
                  )))
                }
              </div>
            ) : (
              <div className={styles.rows}>
                {
                  characters.length > 0
                    ? characters.map((character) => (
                        <Character key={character.id} character={character} />
                      ))
                    : <EmptySearch />
                  }
              </div>
            )
        }
      </Block>
    </>
  );
}

export default Home;
