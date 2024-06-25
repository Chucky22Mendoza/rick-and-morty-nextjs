'use client';

import React, { useEffect, useState } from 'react';
import Block from '../Block';
import { getProcessData } from '@/app/actions';
import useCharacterStore from '@/store/CharactersStore';
import useInfoStore from '@/store/InfoStore';
import SmallButton from '../ui/SmallButton';
import styles from './home.module.css';
import InputFilter from '../ui/InputFilter';
import Character from '../Character';

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
  const [page, setPage] = useState<number>(1);
  const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string | null>(null);

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
      <Block blockTitle="Últimas visitas">
        <span>Ultimas 5 visitas</span>
      </Block>
      <Block
        blockTitle={`Personajes${isFilterClicked ? ` - ${nameFilter}` : ''}`}
        blockComponent={(
          <>
            <InputFilter
              propsInput={{
                placeholder: "Filtrar por nombre",
                value: nameFilter ?? '',
              }}
              onChange={setNameFilter}
              onClick={() => {
                setIsFilterClicked(true);
                setPage(1);
              }}
            />
            <SmallButton
              buttonType={page === 1 ? 'secondary-disabled' : 'secondary'}
              text="-"
              onClick={() => {
                if (page === 1 || isLoading) return null;
                setPage(page - 1);
              }}
            />
            <div className={styles.selector}>
              <SmallButton
                buttonType="primary"
                text={`Página ${page}/${maxPages}`}
                onClick={() => setActive(!active)}
              />
              <div className={active ? styles.active : ''}>
                {
                  Array.from({ length: maxPages }, ((_, i) => (
                    <div>
                      <button
                        onClick={() => {
                          setPage(i + 1);
                          setActive(false);
                        }}
                      >
                        {i + 1}
                      </button>
                    </div>
                  )))
                }
              </div>
            </div>
            <SmallButton
              buttonType={page === maxPages ? 'secondary-disabled' : 'secondary'}
              text="+"
              onClick={() => {
                if (page === maxPages || isLoading) return null;
                setPage(page + 1);
              }}
            />
          </>
        )}
      >
        {
          isLoading
            ? <div>loading</div>
            : (
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
