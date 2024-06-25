import Image from 'next/image';
import styles from './navbar.module.css';
import logo from '@/assets/logo.svg';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h1>Rick and Morty</h1>
      </div>
      <div>
        <Image src="/logo.svg" width={44} height={44} alt="logo" />
      </div>
      <div />
    </nav>
  );
}

export default Navbar;
