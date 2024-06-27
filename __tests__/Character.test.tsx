import React from "react";
import { render, waitFor } from '@testing-library/react';
import Character from "@/components/Character";

describe('Character', () => {
  // Renders character image correctly when provided valid image URL
  it('should render character image correctly when provided valid image URL', async () => {
    const character: ICharacter = {
      id: 1,
      name: 'Test Character',
      image: 'https://example.com/image.jpg',
      origin: { name: 'Test Origin' },
      episode: [],
      gender: '',
      location: {},
      species: '',
      type: '',
    };

    const { queryByRole } = render(
      <Character character={character} />
    );

    await waitFor(() => {
      expect(queryByRole('img', { name: 'Test Character' })).toBeInTheDocument();
    });
  });

  // Handles missing character image gracefully
  it('should handle missing character image gracefully', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Test Character',
      image: '',
      origin: { name: 'Test Origin' },
      episode: [],
      gender: '',
      location: {},
      species: '',
      type: '',
    };

    const { queryByRole } = render(
      <Character character={character} />
    );

    expect(queryByRole('img', { name: 'Test Character' })).toBeEmptyDOMElement();
  });

  // Displays character name correctly
  it('should display character name correctly', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Test Character',
      image: 'https://example.com/image.jpg',
      origin: { name: 'Test Origin' },
      episode: [],
      gender: '',
      location: {},
      species: '',
      type: '',
    };

    const { getByText } = render(
      <Character character={character} />
    );

    const nameElement = getByText('Test Character');
    expect(nameElement).toBeInTheDocument();
  });

  // Displays character origin correctly when origin data is available
  it('should display character origin when origin data is available', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Test Character',
      image: 'https://example.com/image.jpg',
      origin: { name: 'Test Origin' },
      episode: [],
      gender: '',
      location: {},
      species: '',
      type: '',
    };

    const { getByText } = render(
      <Character character={character} />
    );

    const originElement = getByText('Origin: Test Origin');
    expect(originElement).toBeInTheDocument();
  });

  // Navigates to character detail page on click
  it('should navigate to character detail page on click', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Test Character',
      image: 'https://example.com/image.jpg',
      origin: { name: 'Test Origin' },
      episode: [],
      gender: '',
      location: {},
      species: '',
      type: '',
    };

    const { getByRole } = render(
      <Character character={character} />
    );

    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/1');
  });

  // Handles missing character origin gracefully
  it('should handle missing character origin name and origin url gracefully', async () => {
    const character: ICharacter = {
      id: 1,
      name: 'Test Character',
      image: 'https://example.com/image.jpg',
      origin: {},
      episode: [],
      gender: '',
      location: {},
      species: '',
      type: '',
    };

    const { getByText } = render(
      <Character character={character} />
    );

    await waitFor(() => {
      const originElement = getByText('Origin: Unknown');
      expect(originElement).toBeInTheDocument();
    });
  });
});
