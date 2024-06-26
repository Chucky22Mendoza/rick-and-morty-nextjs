import { LinkProps } from 'next/link';
import React from 'react';

/**
 * Defines the ButtonProps type which extends React's ButtonHTMLAttributes<HTMLButtonElement> type
 * and includes an optional property href set to undefined.
 */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

/**
 * Defines the AnchorProps type which extends LinkProps and includes an optional property href set to a string.
 */
export type AnchorProps = LinkProps & {
  href?: string;
};

/**
 * Defines the ButtonAnchorProps type with various optional properties such as styleType, text, icons, href, onClick function, styles, target, button type, id, and text styles.
 */
export type ButtonAnchorProps = {
  styleType: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'delete' | 'disabled';
  text?: string | null;
  iconLeft?: JSX.Element | null;
  iconRight?: JSX.Element | null;
  href?: string | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  styleSheet?: React.CSSProperties | undefined;
  target?: '_blank' | '_self' | '_parent' | '_top' | null;
  typeButton?: 'button' | 'submit' | 'reset';
  id?: string;
  styleText?: React.CSSProperties | undefined;
};

/**
 * Defines a type `DefaultProps` by excluding the property `styleType` from the `ButtonAnchorProps` type.
 */
export type DefaultProps = Omit<ButtonAnchorProps, 'styleType'>;

/**
 * Default properties for a button anchor component.
 */
export const defaultButtonAnchorProps: DefaultProps = {
  text: null,
  iconLeft: null,
  iconRight: null,
  href: null,
  onClick: () => { },
  styleSheet: {},
  target: null,
  typeButton: 'button',
};

/**
 * Interface for defining small button anchor properties with specific button types.
 */
export interface ButtonAnchorSmallProps extends DefaultProps {
  buttonType: 'primary' | 'primary-active' | 'primary-disabled' | 'primary-hover' | 'secondary' | 'secondary-active' | 'secondary-disabled' | 'secondary-hover' | 'secondary-outline' | 'tertiary';
}

/**
 * Defines an `Overload` type that represents a function overload with two signatures, both taking `ButtonAnchorProps` as input and returning a JSX element.
 */
export type Overload = {
  (props: ButtonAnchorProps): JSX.Element;
  (props: ButtonAnchorProps): JSX.Element;
};
