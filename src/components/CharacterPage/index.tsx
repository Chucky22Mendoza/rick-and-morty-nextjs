'use client';

import React, { useEffect } from 'react';
import useLastVisitedStore from '@/store/LastVisitedStore';
import Profile from './Profile';
import styles from './character-page.module.css';

type Props = {
  character: ICharacter;
};

/**
 * Renders the CharacterPage component.
 *
 * This component takes a character object as a prop and adds the character to the last visited list upon mounting.
 *
 * @param {Props} character - The character object to be displayed.
 * @returns {JSX.Element} A React component representing the CharacterPage.
 */
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
