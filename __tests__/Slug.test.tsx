import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Slug from '@/components/Character/Slug';
import styles from '@/components/Character/Slug/slug.module.css';

describe('Slug', () => {
  // Renders character name correctly
  it('should render character name correctly', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Rick Sanchez',
      image: '/rick.png',
      location: { name: 'Earth' },
      species: 'Human',
      status: 'Alive',
      type: '',
      episode: [],
      gender: '',
      origin: {},
    };

    const { getByText } = render(<Slug character={character} />);
    expect(getByText('Rick Sanchez')).toBeInTheDocument();
  });

  // Handles missing character image gracefully
  it('should handle missing character image gracefully', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Rick Sanchez',
      image: '',
      location: { name: 'Earth' },
      species: 'Human',
      status: 'Alive',
      type: '',
      episode: [],
      gender: '',
      origin: {},
    };

    const { getByAltText } = render(<Slug character={character} />);
    expect(getByAltText('Rick Sanchez')).toHaveAttribute('src', '');
  });

  // Displays character image with correct src and alt attributes
  it('should display character image with correct src and alt attributes', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Rick Sanchez',
      image: '/rick.png',
      location: { name: 'Earth' },
      species: 'Human',
      status: 'Alive',
      type: '',
      episode: [],
      gender: '',
      origin: {},
    };

    const { getByRole } = render(<Slug character={character} />);
    const image = getByRole('img');
    expect(image).toHaveAttribute('alt', 'Rick Sanchez');
  });

  // Shows character location and species correctly
  it('should show character location and species correctly', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Morty Smith',
      image: '/morty.png',
      location: { name: 'Earth' },
      species: 'Human',
      status: 'Alive',
      episode: [],
      gender: '',
      origin: {},
      type: ''
    };

    const { getByText } = render(<Slug character={character} />);
    expect(getByText('Earth - Human')).toBeInTheDocument();
  });

  // Applies correct color dot based on character status
  it('should apply correct color dot based on character status', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Rick Sanchez',
      image: '/rick.png',
      location: { name: 'Earth' },
      species: 'Human',
      status: 'Alive',
      episode: [],
      gender: '',
      origin: {},
      type: ''
    };

    const { container } = render(<Slug character={character} />);
    const dotElement = container.querySelector(`.${styles.dot}`);
    expect(dotElement).toHaveClass(styles.green);
  });

  // Navigates to character's detail page on click
  it('should navigate to character\'s detail page on click', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Rick Sanchez',
      image: '/rick.png',
      location: { name: 'Earth' },
      species: 'Human',
      status: 'Alive',
      episode: [],
      gender: '',
      origin: {},
      type: ''
    };

    const { getByRole } = render(<Slug character={character} />);

    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/1');
  });

  // Displays 'unknown' status when character status is null or undefined
  it('should display "unknown" status when character status is null or undefined', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Morty Smith',
      image: '/morty.png',
      location: { name: 'Earth' },
      species: 'Human',
      episode: [],
      gender: '',
      origin: {},
      type: ''
    };

    const { getByText } = render(<Slug character={character} />);
    expect(getByText('unknown')).toBeInTheDocument();
  });

  // Renders correctly when character location is null or undefined
  it('should render correctly when character location is null or undefined', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Morty Smith',
      image: '/morty.png',
      location: {},
      species: 'Human',
      status: 'Alive',
      episode: [],
      gender: '',
      origin: {},
      type: ''
    };

    const { getByText } = render(<Slug character={character} />);
    expect(getByText('Morty Smith')).toBeInTheDocument();
  });

  // Handles missing character species gracefully
  it('should handle missing character species gracefully', async () => {
    const character: ICharacter = {
      id: 1,
      name: 'Morty Smith',
      image: '/morty.png',
      location: { name: 'Earth' },
      status: 'Alive',
      episode: [],
      gender: '',
      origin: {},
      species: '',
      type: '',
    };
    const { getByText } = render(<Slug character={character} />);

    await waitFor(() => {
      expect(getByText('Morty Smith')).toBeInTheDocument();
      expect(getByText('Earth - unknown')).toBeInTheDocument();
    })
  });

  // Applies default dot color when character status is not 'Alive', 'Dead', or 'unknown'
  it('should apply default dot color when character status is not Alive, Dead, or unknown', () => {
    const character: ICharacter = {
      id: 1,
      name: 'Morty Smith',
      image: '/morty.png',
      location: { name: 'Earth' },
      species: 'Human',
      status: 'unknown',
      episode: [],
      gender: '',
      origin: {},
      type: '',
    };

    const { getByText, container } = render(<Slug character={character} />);
    const dotElement = container.querySelector(`.${styles.dot}`);

    expect(dotElement).toHaveClass(styles.gray);
  });
});
