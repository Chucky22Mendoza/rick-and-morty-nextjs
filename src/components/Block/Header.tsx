import React from 'react';
import styles from './block.module.css';

type Props = {
  title: string;
  components: React.ReactNode;
  isSticky?: boolean;
};

function Header({ title, components, isSticky = false }: Props) {
  return (
    <header
      className={styles.header}
      style={
        isSticky
          ? {
            position: 'sticky',
            zIndex: '2',
            backgroundColor: 'var(--color-tertiary)',
            top: '0',
          } : {}
      }
    >
      <div>
        <h1>{title}</h1>
        <div>{components}</div>
      </div>
    </header>
  );
}

export default Header;
