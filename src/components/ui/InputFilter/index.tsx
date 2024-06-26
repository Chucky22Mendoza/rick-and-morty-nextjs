import React from 'react';
import Image from 'next/image';
import styles from './input-filter.module.css';

type Props = {
  propsInput: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: (value: string) => void;
  onClick?: () => void;
};

/**
 * Functional component for an input filter with a button.
 *
 * @param propsInput - Props for the input element.
 * @param onChange - Function to handle input change event.
 * @param onClick - Function to handle button click event.
 * @returns JSX element representing the input filter with a button.
 */
function InputFilter({ propsInput, onChange, onClick }: Props) {
  return (
    <div className={styles['input-container']}>
      <input
        {...propsInput}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <button onClick={onClick}>
        <Image src="/filter.svg" width={20} height={20} alt="Filtrar" />
      </button>
    </div>
  );
}

export default InputFilter;
