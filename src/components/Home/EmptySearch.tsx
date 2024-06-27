import React from 'react';
import Image from 'next/image';
import styles from './search.module.css';

/**
 * Component representing an empty search state.
 *
 * Renders a section with a danger icon and a message prompting the user to try another search.
 *
 * @returns {JSX.Element} JSX element displaying the empty search state.
 */
function EmptySearch() {
  return (
    <section className={styles.empty}>
      <div>
        <Image src="/danger.svg" width={32} height={32} alt="danger" />
      </div>
      <h2>Try again with another search</h2>
    </section>
  );
}

export default EmptySearch;
