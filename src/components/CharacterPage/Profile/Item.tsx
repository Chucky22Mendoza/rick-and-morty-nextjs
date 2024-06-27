import React from 'react';
import styles from './profile.module.css';
import Image from 'next/image';

type Props = {
  sub: string;
  info: string;
}

/**
 * Renders a profile item component with the provided sub and info text.
 *
 * @param {string} sub - The sub text to display.
 * @param {string} info - The info text to display.
 * @returns {JSX.Element} Profile item component with sub and info text.
 */
function Item({ sub, info }: Props) {
  if (sub === '' || info === '') return null;
  return (
    <div className={styles.navlink}>
      <div>
        <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
        <h2>{sub}</h2>
      </div>
      <div>
        <h2 style={{ textAlign: 'right' }}>{info}</h2>
      </div>
    </div>
  )
}

export default Item