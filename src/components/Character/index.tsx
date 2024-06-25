import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ICharacter } from '@/index';
import styles from './characters.module.css';

type Props = {
  character: ICharacter;
};

function Character({ character }: Props) {
  return (
    <Link href={`/${character.id}`} className={styles.character}>
      <Image src={character.image} alt={character.name} className="img-fluid rounded-pill" width={150} height={150} loading="lazy" />
      <div>
        <h3>{character.name}</h3>
        <span>{`Origin: ${character.origin && character.origin.name}`}</span>
      </div>
    </Link>
  );
}

export default Character;
