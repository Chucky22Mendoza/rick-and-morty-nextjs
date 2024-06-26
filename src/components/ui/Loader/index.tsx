import React from 'react';
import styles from './loader.module.css';

/**
 * Functional component for displaying a loader element.
 *
 * @returns {JSX.Element} Loader element to indicate loading state.
 */
function Loader() {
  return (
    <div className={styles.loader} />
  );
}

export default Loader;
