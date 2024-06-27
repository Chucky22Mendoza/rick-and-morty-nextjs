import React, { useState } from 'react'
import SmallButton from '../ui/SmallButton';
import styles from './home.module.css';

type Props = {
  page: number;
  setPage: (page: number) => void;
  isLoading: boolean;
  maxPages: number;
};

/**
 * Renders a list of events with pagination controls.
 *
 * @param {Props} page - The current page number.
 * @param {Props} setPage - Function to set the current page number.
 * @param {Props} maxPages - The maximum number of pages.
 * @param {Props} isLoading - Boolean indicating if data is loading.
 * @returns {JSX.Element} - The rendered list of events with pagination controls.
 */
function ListEvents({ page, setPage, maxPages, isLoading }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={styles.events}>
      <SmallButton
        buttonType={page === 1 ? 'secondary-disabled' : 'secondary'}
        text="-"
        onClick={() => {
          if (page === 1 || isLoading) return null;
          setPage(page - 1);
        }}
      />
      <div className={styles.selector}>
        <SmallButton
          buttonType="primary"
          text={page > 0 ? `Page ${page}/${maxPages}` : ''}
          onClick={() => setActive(!active)}
        />
        <div className={active ? styles.active : ''}>
          {
            Array.from({ length: maxPages }, ((_, i) => (
              <div key={`page-${i + 1}`} className={page === i + 1 ? styles.selected : undefined}>
                <button
                  onClick={() => {
                    setPage(i + 1);
                    setActive(false);
                  }}
                >
                  {i + 1}
                </button>
              </div>
            )))
          }
        </div>
      </div>
      <SmallButton
        buttonType={page === maxPages ? 'secondary-disabled' : 'secondary'}
        text="+"
        onClick={() => {
          if (page === maxPages || isLoading) return null;
          setPage(page + 1);
        }}
      />
    </div>
  )
}

export default ListEvents