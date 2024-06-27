import React from 'react';
import styles from './not-found.module.css';
import Link from 'next/link';

function NotFound() {
  return (
    <div className={styles['background-img']}>
      {/* <div className={styles.space} /> */}
			<div className={styles.wrapper}>
				<div className={styles['img-wrapper']}>
					<span>44</span>
				</div>
				<p>The page you are trying to search has been <br /> moved to another universe.</p>
				<Link href="/" className={styles.home}>GET ME HOME</Link>
			</div>
		</div>
  );
}

export default NotFound;
