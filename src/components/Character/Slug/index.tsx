import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './slug.module.css';

type Props = {
  character: ICharacter;
};

function Slug({ character }: Props) {
  const dots: { [key: string]: string } = {
    'Alive': 'green',
    'Dead': 'red',
    'Unknown': 'gray',
  };

  return (
    <Link href={`/${character.id}`} className={styles.slug}>
      <Image src={character.image} width={80} height={80} alt={character.name} loading="lazy" />
      <div>
        <div className={styles.info}>
          <h2>{character.name}</h2>
          <span>{`${character.location.name} - ${character.species}`}</span>
        </div>
        <div className={`${styles.dot} ${styles[dots[character.status as string]]}`}>
          <span>{character.status}</span>
        </div>
      </div>
    </Link>
  );
}

export default Slug;
