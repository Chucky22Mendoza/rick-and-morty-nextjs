import React from 'react';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

function template({ children }: { children: React.ReactNode}){
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
    </>
  );
}

export default template;