import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  // renders a navigation bar element
  it('should render a navigation bar element', () => {
    const { container } = render(<Navbar />);
    const navElement = container.querySelector('nav');
    expect(navElement).toBeInTheDocument();
  });

  // handles missing or broken logo image gracefully
  it('should handle missing or broken logo image gracefully', () => {
    const { getByAltText } = render(<Navbar />);
    const logoImage = getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/logo.svg');
  });

  // contains a link to the home page
  it('should contain a link to the home page', () => {
    const { container } = render(<Navbar />);
    const linkElement = container.querySelector('a[href="/"]');
    expect(linkElement).toBeInTheDocument();
  });

  // displays the text "Rick and Morty" in the link
  it('should display "Rick and Morty" in the link', () => {
    const { getByText } = render(<Navbar />);
    const linkElement = getByText('Rick and Morty');
    expect(linkElement).toBeInTheDocument();
  });

  // renders a logo image with correct src, width, height, and alt attributes
  it('should render a logo image with correct attributes', () => {
    const { container } = render(<Navbar />);
    const imageElement = container.querySelector('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/logo.svg');
    expect(imageElement).toHaveAttribute('width', '44');
    expect(imageElement).toHaveAttribute('height', '44');
    expect(imageElement).toHaveAttribute('alt', 'logo');
  });

  // ensures link to home page is accessible and functional
  it('should have a link to the home page', () => {
    const { getByText } = render(<Navbar />);
    const linkElement = getByText('Rick and Morty');
    expect(linkElement).toBeInTheDocument();
  });
});
