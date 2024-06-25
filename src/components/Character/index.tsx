import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import { ICharacter } from '@/index';
import SkeletonLoader from './SkeletonLoader';
import styles from './characters.module.css';

const Image = lazy(() => import('next/image'));

type Props = {
  character: ICharacter;
};

function Character({ character }: Props) {
  return (
    <Link href={`/${character.id}`} className={styles.character}>
      <Suspense fallback={<SkeletonLoader />}>
        <Image src={character.image} alt={character.name} className="img-fluid rounded-pill" width={200} height={200} />
      </Suspense>
      <div className={styles.info}>
        <h3>{character.name}</h3>
        <span>{`Origin: ${character.origin && character.origin.name}`}</span>
      </div>
    </Link>
  );
}

export default Character;
