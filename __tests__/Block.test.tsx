import React from 'react';
import { render } from '@testing-library/react';
import Block from '@/components/Block';

describe('Block', () => {
  // renders children correctly inside the block
  it('should render children correctly inside the block', () => {
    const { getByText } = render(
      <Block blockTitle="Test Block">
        <p>Child Content</p>
      </Block>
    );
    expect(getByText('Child Content')).toBeInTheDocument();
  });

  // handles empty children gracefully
  it('should handle empty children gracefully', () => {
    const { container } = render(
      <Block blockTitle="Test Block">
        {null}
      </Block>
    );
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
