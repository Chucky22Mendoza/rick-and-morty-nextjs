import React from 'react';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import Footer from '@/components/Footer';

/**
 * Renders a template layout with a Navbar, main content area, and Footer.
 *
 * @param children - The content to be rendered inside the main content area.
 * @returns JSX element representing the template layout.
 */
function template({ children }: { children: React.ReactNode}){
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {children}
        <Footer />
      </main>
    </>
  );
}

export default template;