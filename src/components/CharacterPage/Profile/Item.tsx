import React from 'react';
import styles from './profile.module.css';
import Image from 'next/image';

type Props = {
  sub: string;
  info: string;
}

function Item({ sub, info }: Props) {
  return (
    <div className={styles.navlink}>
      <div>
        <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
        <h2>{sub}</h2>
      </div>
      <div>
        <h2>{info}</h2>
      </div>
    </div>
  )
}

export default Item