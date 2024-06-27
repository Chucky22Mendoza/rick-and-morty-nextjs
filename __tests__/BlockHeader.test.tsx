import React from 'react';
import { render } from '@testing-library/react';
import Header from '@/components/Block/Header';

describe('Block Header', () => {
  // renders title correctly
  it('should render title correctly when provided', () => {
    const { getByText } = render(<Header title="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  // handles empty title gracefully
  it('should handle empty title gracefully when not provided', () => {
    const { container } = render(<Header title="" />);
    expect((container.querySelector('h1') as HTMLElement).textContent).toBe('');
  });

  // applies sticky styles when isSticky is true
  it('should apply sticky styles when isSticky is true', () => {
    const { container } = render(<Header title="Test Title" isSticky={true} />);
    const headerElement = container.querySelector('header');
    expect(headerElement).toHaveStyle({
      position: 'sticky',
      zIndex: '2',
      backgroundColor: 'var(--color-tertiary)',
      top: '0',
    });
  });

  // does not apply sticky styles when isSticky is false
  it('should not apply sticky styles when isSticky is false', () => {
    const { container } = render(<Header title="Test Title" isSticky={false} />);
    const headerElement = container.querySelector('header');
    expect(headerElement).toHaveStyle({ position: '', zIndex: '', backgroundColor: '', top: '' });
  });

  // renders components when provided
  it('should render components when provided', () => {
    const { getByText } = render(
      <Header title="Test Title" components={<div>Test Component</div>} />
    );
    expect(getByText('Test Component')).toBeInTheDocument();
  });

  // handles undefined components
  it('should handle undefined components', () => {
    const { getByText } = render(<Header title="Test Title" components={undefined} />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  // renders correctly with multiple components
  it('should render multiple components correctly', () => {
    const { getByText } = render(
      <Header
        title="Test Title"
        components={<><div>Component 1</div><div>Component 2</div></>}
      />
    );
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Component 1')).toBeInTheDocument();
    expect(getByText('Component 2')).toBeInTheDocument();
  });
});
