'use client';

import React, { useEffect } from 'react';
import useLastVisitedStore from '@/store/LastVisitedStore';
import Profile from './Profile';
import styles from './character-page.module.css';

type Props = {
  character: ICharacter;
};

function CharacterPage({ character }: Props) {
  const addCharacter = useLastVisitedStore((state) => state.addCharacter);
  useEffect(() => {
    addCharacter(character);
  }, []);

  return (
    <div className={styles.grid}>
      <Profile character={character} />
    </div>
  );
}

export default CharacterPage;
