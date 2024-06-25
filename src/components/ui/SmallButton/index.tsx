'use client';

import React from 'react';
import { ButtonAnchorSmallProps } from '@/types/ButtonProps';
import ButtonOrAnchorProps from '../ButtonOrAnchorProps';
import styles from './small-button.module.css';

function SmallButton({
  buttonType,
  text = null,
  iconLeft = null,
  iconRight = null,
  href = null,
  onClick = () => { },
  styleSheet = {},
  target = null,
  styleText,
}: ButtonAnchorSmallProps) {
  // Guard para verificar si existe href en props
  const textElement = (text !== null && text !== '')
    ? <span style={styleText}>{text}</span>
    : null;
  const childContent: React.ReactElement = (
    <>
      {iconLeft}
      {textElement}
      {iconRight}
    </>
  );

  // renderizado de anchor
  if (href !== null && href !== '') {
    return (
      <ButtonOrAnchorProps target={target ?? '_self'} style={styleSheet} href={href ?? '/'} className={`${styles[buttonType]}`}>
        {childContent}
      </ButtonOrAnchorProps>
    );
  }
  // renderizado de botón
  return (
    <ButtonOrAnchorProps style={styleSheet} className={`${styles[buttonType]}`} onClick={onClick}>
      {childContent}
    </ButtonOrAnchorProps>
  );
}

export default SmallButton;
