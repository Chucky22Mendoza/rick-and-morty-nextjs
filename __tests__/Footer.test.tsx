import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);
    expect(screen.getByText('Chucky22Mendoza')).toBeInTheDocument();
  });
});
