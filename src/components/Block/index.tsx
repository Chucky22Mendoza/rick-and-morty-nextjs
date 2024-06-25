import React from 'react';
import Header from './Header';
import styles from './block.module.css';

type Props = {
  children: React.ReactNode;
  blockTitle: string;
  headerComponent?: React.ReactNode;
  isHeaderSticky?: boolean;
};

function Block({
  children,
  blockTitle,
  headerComponent,
  isHeaderSticky = false,
}: Props) {
  return (
    <section className={styles.block}>
      <Header title={blockTitle} components={headerComponent} isSticky={isHeaderSticky} />
      <div>
        {children}
      </div>
    </section>
  );
}

export default Block;
