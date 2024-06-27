import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SmallButton from '@/components/ui/SmallButton';
import Image from 'next/image';
import styles from '@/components/ui/SmallButton/small-button.module.css';

describe('SmallButton', () => {
  // Renders a button when href is not provided
  it('should render a button when href is not provided', () => {
    const { container } = render(<SmallButton buttonType="primary" />);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  // Renders correctly when text is null or empty
  it('should render correctly when text is null or empty', () => {
    const { container } = render(<SmallButton buttonType="primary" text={null} />);
    const span = container.querySelector('span');
    expect(span).toBeNull();
  });

  // Renders an anchor when href is provided
  it('should render an anchor when href is provided', () => {
    const { container } = render(<SmallButton buttonType="primary" href="https://example.com" />);
    const anchor = container.querySelector('a');
    expect(anchor).toBeInTheDocument();
  });

  // Applies correct styles based on buttonType
  it('should apply primary styles when buttonType is \'primary\'', () => {
    const { container } = render(<SmallButton buttonType="primary" />);
    const button = container.querySelector('button');
    expect(button).toHaveClass(styles['primary']);
  });

  // Displays text when text prop is provided
  it('should display text when text prop is provided', () => {
    const { getByText } = render(<SmallButton buttonType="primary" text="Click me" />);
    const textElement = getByText('Click me');
    expect(textElement).toBeInTheDocument();
  });

  // Displays iconLeft when iconLeft prop is provided
  it('should display iconLeft when iconLeft prop is provided', () => {
    const { container } = render(<SmallButton buttonType="primary" iconLeft={<Image src="/arrow.svg" width={18} height={18} alt="arrow" />} />);
    const iconLeft = container.querySelector('img:first-child');
    expect(iconLeft).toBeInTheDocument();
  });

  // Displays iconRight when iconRight prop is provided
  it('should display iconRight when provided', () => {
    const { container } = render(<SmallButton buttonType="primary" iconRight={<Image src="/arrow.svg" width={18} height={18} alt="arrow" />} />);
    const iconRight = container.querySelector('img:last-child');
    expect(iconRight).toBeInTheDocument();
  });

  // Calls onClick handler when button is clicked
  it('should call onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<SmallButton buttonType="primary" onClick={onClickMock} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  // Sets target attribute correctly for anchor
  it('should set target attribute to \'_blank\' when target is provided', () => {
    const { container } = render(<SmallButton buttonType="primary" href="https://example.com" target="_blank" />);
    const anchor = container.querySelector('a');
    expect(anchor).toHaveAttribute('target', '_blank');
  });

  // Applies custom styles from styleSheet prop
  it('should apply custom styles when styleSheet prop is provided', () => {
    const customStyles = { backgroundColor: 'red', color: 'white' };
    const { container } = render(<SmallButton buttonType="primary" styleSheet={customStyles} />);
    const button = container.querySelector('button');
    expect(button).toHaveStyle('background-color: red; color: white;');
  });

  // Renders correctly when iconLeft is null
  it('should render a button when iconLeft is null', () => {
    const { container } = render(<SmallButton buttonType="primary" iconLeft={null} />);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  // Renders correctly when iconRight is null
  it('should render correctly when iconRight is null', () => {
    const { container } = render(<SmallButton buttonType="primary" iconRight={null} />);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  // Handles empty href gracefully
  it('should render a button when href is empty', () => {
    const { container } = render(<SmallButton buttonType="primary" href="" />);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  // Handles missing onClick handler without errors
  it('should not throw an error when onClick handler is missing', () => {
    expect(() => render(<SmallButton buttonType="primary" />)).not.toThrow();
  });

  // Handles missing styleSheet without errors
  it('should not throw an error when styleSheet is missing', () => {
    expect(() => render(<SmallButton buttonType="primary" />)).not.toThrow();
  });

  // Handles missing target without errors
  it('should not throw an error when target is missing', () => {
    expect(() => render(<SmallButton buttonType="primary" />)).not.toThrow();
  });
});
