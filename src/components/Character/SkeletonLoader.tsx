import React from 'react';
import styles from './characters.module.css';
import Loader from '../ui/Loader';

function SkeletonLoader() {
  return (
    <div className={styles.skeleton}>
      <Loader />
    </div>
  );
}

export default SkeletonLoader;
