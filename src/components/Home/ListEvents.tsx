import React, { useState } from 'react'
import InputFilter from '../ui/InputFilter';
import SmallButton from '../ui/SmallButton';
import styles from './home.module.css';

type Props = {
  page: number;
  setPage: (page: number) => void;
  isLoading: boolean;
  maxPages: number;
};

function ListEvents({ page, setPage, maxPages, isLoading }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      {/* <InputFilter
        propsInput={{
          placeholder: "Filtrar por nombre",
          value: nameFilter ?? '',
        }}
        onChange={setNameFilter}
        onClick={() => {
          setIsFilterClicked(true);
          setPage(1);
        }}
      /> */}
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
              <div className={page === i + 1 ? styles.selected : undefined}>
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
    </>
  )
}

export default ListEvents