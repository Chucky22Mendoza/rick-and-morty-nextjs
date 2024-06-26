import React from 'react';
import Header from './Header';
import styles from './block.module.css';

type Props = {
  children: React.ReactNode;
  blockTitle: string;
  blockTitleElement?: React.ReactNode;
  headerComponent?: React.ReactNode;
  isHeaderSticky?: boolean;
  style?: React.CSSProperties;
};

/**
 * Renders a block component with a header and children.
 *
 * @param children - The content to be rendered inside the block.
 * @param blockTitle - The title of the block.
 * @param headerComponent - The components to be rendered inside the header.
 * @param isHeaderSticky - Whether the header should be sticky. Defaults to false.
 * @param style - Custom styles to be applied to the block.
 * @param blockTitleElement - Additional element to be rendered in the header title section.
 * @returns JSX element representing the block component.
 */
function Block({
  children,
  blockTitle,
  headerComponent,
  isHeaderSticky = false,
  style,
  blockTitleElement,
}: Props) {
  return (
    <section className={styles.block} style={style}>
      <Header title={blockTitle} components={headerComponent} isSticky={isHeaderSticky} titleElement={blockTitleElement} />
      <div>
        {children}
      </div>
    </section>
  );
}

export default Block;
