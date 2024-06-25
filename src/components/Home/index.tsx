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

async function loadData(page: number = 1, name: string | null = null) {
  const characterState = useCharacterStore.getState();
  const infoState = useInfoStore.getState();
  characterState.setIsLoading(true);
  const data = await getProcessData(page, name);
  characterState.setCharacters(data.results);
  characterState.setIsLoading(false);
  infoState.setInfo(data.info);
}

function Home() {
  const characters = useCharacterStore((state) => state.characters);
  const isLoading = useCharacterStore((state) => state.isLoading);
  const maxPages = useInfoStore((state) => state.info.pages);
  const characterVisited = useLastVisitedStore((state) => state.characterVisited);
  const [page, setPage] = useState<number>(1);
  const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string | null>(null);
  const [toggleVisited, setToggleVisited] = useState<boolean>(false);

  useEffect(() => {
    // if (isFilterClicked && nameFilter) {
    //   loadData(page, nameFilter);
    //   return () => {};
    // }
    // if (!isFilterClicked && !nameFilter) {
      loadData(page);
    // }
  }, [page]);

  return (
    <>
      {
        characterVisited.length > 0 && (
          <Block
            blockTitle="Last visited characters"
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
            <div className={styles.list} style={!toggleVisited ? { marginTop: '-100%' } : {}}>
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
        blockTitle={`Characters${isFilterClicked ? ` - ${nameFilter}` : ''}`}
        isHeaderSticky
        headerComponent={(
          <ListEvents
            isLoading={isLoading}
            maxPages={maxPages}
            page={page}
            setPage={setPage}
          />
        )}
      >
        {
          isLoading
            ? (
              <div className={styles.rows}>
                {
                  Array.from({ length: 20 }, ((_, i) => (
                    <CharacterLoader key={`skeleton-${i}`} />
                  )))
                }
              </div>
            ) : (
              <div className={styles.rows}>
                {characters.map((character) => (
                  <Character key={character.id} character={character} />
                ))}
              </div>
            )
        }
      </Block>
    </>
  );
}

export default Home;
