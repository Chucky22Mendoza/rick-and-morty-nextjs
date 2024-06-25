import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">Rick and Morty</Link>
      </div>
      <div>
        <Image src="/logo.svg" width={44} height={44} alt="logo" />
      </div>
      <div />
    </nav>
  );
}

export default Navbar;
