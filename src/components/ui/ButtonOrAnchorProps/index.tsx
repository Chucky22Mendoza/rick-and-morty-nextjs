/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

// Button props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

// Anchor props
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

// in / out options
type Overload = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};

// Guard to verify if href exists in props
const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

// Component
const ButtonOrAnchorProps: Overload = function returned(props: ButtonProps | AnchorProps) {
  const { children } = props;
  // render anchor
  if (hasHref(props)) return <a {...props}>{children}</a>;
  // render button
  return <button type={props?.type ?? 'button'} {...props} />;
};

export default ButtonOrAnchorProps;
