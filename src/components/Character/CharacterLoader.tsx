import React from 'react';
import SkeletonLoader from './SkeletonLoader';
import styles from './characters.module.css';

function CharacterLoader() {
  return (
    <div className={styles['character-skeleton']}>
      <SkeletonLoader />
    </div>
  );
}

export default CharacterLoader;
