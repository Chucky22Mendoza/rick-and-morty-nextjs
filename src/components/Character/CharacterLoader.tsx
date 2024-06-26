import React from 'react';
import SkeletonLoader from './SkeletonLoader';
import styles from './characters.module.css';

/**
 * Renders a character loader component that displays a skeleton loading animation.
 *
 * @returns {JSX.Element} The character loader component with skeleton loading animation.
 */
function CharacterLoader() {
  return (
    <div className={styles['character-skeleton']}>
      <SkeletonLoader />
    </div>
  );
}

export default CharacterLoader;
