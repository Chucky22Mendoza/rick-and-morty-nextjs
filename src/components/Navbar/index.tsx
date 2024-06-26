import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

/**
 * Functional component for rendering a navigation bar.
 * Displays a navigation bar with a link to the home page and a logo image.
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
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
