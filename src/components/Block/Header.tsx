import React from 'react';
import styles from './block.module.css';

type Props = {
  title: string;
  components?: React.ReactNode;
  titleElement?: React.ReactNode;
  isSticky?: boolean;
};

/**
 * Renders a header component with the provided title, components, and optional sticky behavior.
 *
 * @param title - The title to be displayed in the header.
 * @param components - Additional components to be rendered within the header.
 * @param isSticky - A boolean indicating whether the header should be sticky. Defaults to false.
 * @param titleElement - An optional React node to be displayed alongside the title.
 * @returns A React element representing the header component.
 */
function Header({
  title,
  components,
  isSticky = false,
  titleElement,
}: Props) {
  return (
    <header
      className={styles.header}
      style={
        isSticky
          ? {
            position: 'sticky',
            zIndex: '2',
            backgroundColor: 'var(--color-tertiary)',
            top: '0',
          } : {}
      }
    >
      <div>
        <div>
          <h1>{title}</h1>
          {titleElement}
        </div>
        <div>{components}</div>
      </div>
    </header>
  );
}

export default Header;
