import React from "react";
import { render } from '@testing-library/react';
import CharacterLoader from "@/components/Character/CharacterLoader";

describe('CharacterLoader', () => {
  // renders without crashing
  it('should render without crashing', () => {
    const { container } = render(<CharacterLoader />);
    expect(container).toBeInTheDocument();
  });

  // renders correctly with no props
  it('should render correctly with no props', () => {
    const { getByTestId } = render(<CharacterLoader />);
    expect(getByTestId('suspense-fallback')).toBeInTheDocument();
  });
});
