import React from 'react';
import { fireEvent, render  } from '@testing-library/react';
import EmptySearch from '@/components/Home/EmptySearch';

describe('EmptySearch', () => {
  // renders without crashing
  it('should render without crashing', () => {
    const { container } = render(<EmptySearch />);
    expect(container).toBeInTheDocument();
  });

  // handles missing or broken image gracefully
  it('should handle missing or broken image gracefully', () => {
    const { getByAltText } = render(<EmptySearch />);
    const image = getByAltText('danger');
    fireEvent.error(image);
    expect(image).toHaveAttribute('src', '/danger.svg');
  });
});
