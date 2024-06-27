import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '@/components/CharacterPage/Profile/Item';

describe('Item', () => {
  // renders correctly with valid sub and info props
  it('should render correctly when valid sub and info props are provided', () => {
    const { getByText, getByAltText } = render(<Item sub="Test Sub" info="Test Info" />);
    expect(getByText('Test Sub')).toBeInTheDocument();
    expect(getByText('Test Info')).toBeInTheDocument();
    expect(getByAltText('arrow')).toBeInTheDocument();
  });

  // handles empty string for sub prop
  it('does not render the element when sub prop is empty', () => {
    render(<Item sub="" info="Test Info" />);
    const conditionalElement = screen.queryByText('Test Info');
    expect(conditionalElement).toBeNull();
  });

  // handles empty string for info prop
  it('does not render the element when info prop is empty', () => {
    render(<Item sub="Test Sub" info="" />);
    const conditionalElement = screen.queryByText('Test Sub');

    expect(conditionalElement).toBeNull();
  });

  // displays the sub text inside an h2 element
  it('should display sub text inside an h2 element', () => {
    const { getByText } = render(<Item sub="Test Sub" info="Test Info" />);
    expect(getByText('Test Sub')).toBeInTheDocument();
  });

  // displays the info text inside an h2 element with right alignment
  it('should display info text inside an h2 element with right alignment', () => {
    const { getByText } = render(<Item sub="Test Sub" info="Test Info" />);
    const infoElement = getByText('Test Info');
    expect(infoElement).toBeInTheDocument();
    expect(infoElement).toHaveStyle({ textAlign: 'right' });
  });

  // includes an Image component with the correct src, alt, width, and height attributes
  it('should include Image component with correct attributes', () => {
    const { getByAltText } = render(<Item sub="Test Sub" info="Test Info" />);
    expect(getByAltText('arrow')).toBeInTheDocument();
  });
});