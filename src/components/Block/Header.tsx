import React from 'react';
import styles from './block.module.css';

type Props = {
  title: string;
  components: React.ReactNode;
};

function Header({ title, components }: Props) {
  return (
    <header className={styles.header}>
      <div>
        <h1>{title}</h1>
        <div>{components}</div>
      </div>
    </header>
  );
}

export default Header;
