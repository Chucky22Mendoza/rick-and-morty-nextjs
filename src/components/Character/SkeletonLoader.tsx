import React from 'react';
import Loader from '../ui/Loader';
import styles from './characters.module.css';

/**
 * Renders a skeleton loader component that displays a loading animation.
 *
 * @returns {JSX.Element} The skeleton loader component.
 */
function SkeletonLoader() {
  return (
    <div className={styles.skeleton}>
      <Loader />
    </div>
  );
}

export default SkeletonLoader;
