import React from 'react';
import Header from './Header';
import styles from './block.module.css';

type Props = {
  children: React.ReactNode;
  blockTitle: string;
  blockComponent?: React.ReactNode;
};

function Block({ children, blockTitle, blockComponent }: Props) {
  return (
    <section className={styles.block}>
      <Header title={blockTitle} components={blockComponent} />
      <div>
        {children}
      </div>
    </section>
  );
}

export default Block;
