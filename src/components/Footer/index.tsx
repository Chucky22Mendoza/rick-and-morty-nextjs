import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

/**
 * Function component representing the footer section of the website.
 * It displays information about the developer and links to their social media profiles.
 *
 * @returns {JSX.Element} The JSX element representing the footer section.
 */
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <Link className={styles.dev} href="https://jesus-mendoza.pages.dev/" rel="noreferrer" target="_blank">
          <span>Desarrollado por: </span>
          <p>Chucky22Mendoza</p>
        </Link>
        <div>
          <Link href="https://github.com/Chucky22Mendoza/" target="_blank" rel="noreferrer">
            <Image src="/github.svg" width={30} height={30} alt="Github" />
          </Link>
          <Link href="https://www.linkedin.com/in/jes%C3%BAsmendoza22/" target="_blank" rel="noreferrer">
            <Image src="/linkedin.svg" width={30} height={30} alt="Linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
