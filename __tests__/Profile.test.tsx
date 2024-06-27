import React from 'react';
import { render, screen, waitFor,  } from '@testing-library/react';
import Profile from '@/components/CharacterPage/Profile';
import fetchMock from 'jest-fetch-mock';

describe('Profile', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // Renders character image, name, and status correctly
  it('should render character image, name, and status correctly when provided with valid character data from fetch', async () => {
    const character: ICharacter = {
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      status: 'Alive',
      episode: [],
      origin: {},
      location: {},
      gender: 'Male',
      species: 'Human',
      type: '',
    };

    const { queryByRole, getByText } = render(<Profile character={character} />);

    expect(queryByRole('img', { name: 'Avatar' })).toBeEmptyDOMElement();
    expect(getByText('Rick Sanchez')).toBeInTheDocument();
    expect(getByText('Alive')).toBeInTheDocument();
  });

  // Handles character with missing image URL gracefully
  it('should handle character with missing image URL gracefully', () => {
    const character: ICharacter = {
      id: 1,
      image: '',
      name: 'Morty Smith',
      status: 'Alive',
      episode: [],
      origin: {},
      location: {},
      gender: 'Male',
      species: 'Human',
      type: '',
    };

    const { getByText, queryByRole } = render(<Profile character={character} />);
    expect(queryByRole('img', { name: 'Avatar' })).toBeNull();
    expect(getByText('Morty Smith')).toBeInTheDocument();
    expect(getByText('Alive')).toBeInTheDocument();
  });

  // Handles character with missing status gracefully
  it('should handle missing status gracefully', async () => {
      const character: ICharacter = {
        id: 1,
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        name: 'Morty Smith',
        episode: ['https://rickandmortyapi.com/api/episode/1'],
        origin: { url: 'https://rickandmortyapi.com/api/location/1' },
        location: { url: 'https://rickandmortyapi.com/api/location/2' },
        gender: 'Male',
        species: 'Human',
        type: '',
      };

      fetchMock.mockResponseOnce(JSON.stringify(character));
      const { getByText } = render(<Profile character={character} />);

      await waitFor(() => {
        expect(getByText('Morty Smith')).toBeInTheDocument();
        expect(getByText('unknown')).toBeInTheDocument();
      });
  });

  // Handles character with empty episode array
  it('should handle character with empty episode array', async () => {
    const character = {
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Morty Smith',
      status: 'Alive',
      episode: [],
      origin: {},
      location: {},
      gender: 'Male',
      species: 'Human',
      type: '',
    };

    fetchMock.mockResponseOnce(JSON.stringify(character));
    const { getByText } = render(<Profile character={character} />);

    await waitFor(() => {
      expect(getByText('Morty Smith')).toBeInTheDocument();
      expect(getByText('Alive')).toBeInTheDocument();
      expect(screen.queryByText('First episode')).toBeNull();
    });
  });

  // Handles character with null origin or location URLs
  it('should handle character with null origin URL', async () => {
      const character: ICharacter = {
        id: 1,
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        name: 'Rick Sanchez',
        status: 'Alive',
        episode: [],
        origin: { url: null },
        location: { url: 'https://rickandmortyapi.com/api/location/1', name: 'Test' },
        gender: 'Male',
        species: 'Human',
        type: '',
      };

      fetchMock.mockResponseOnce(JSON.stringify(character));
      const { getByText } = render(<Profile character={character} />);

      await waitFor(() => {
        expect(getByText('Name Unknown')).toBeInTheDocument();
        expect(getByText('Type Unknown')).toBeInTheDocument();
      });
  });

  // Handles character with missing gender, species, or type
  it('should handle missing gender, species, or type', async () => {
    const character: ICharacter = {
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Morty Smith',
      status: 'Alive',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      origin: { url: 'https://rickandmortyapi.com/api/location/1' },
      location: { url: 'https://rickandmortyapi.com/api/location/2' },
      gender: '',
      species: '',
      type: '',
    };

    fetchMock.mockResponseOnce(JSON.stringify(character));
    const { queryByText } = render(<Profile character={character} />);

    await waitFor(() => {
      expect(queryByText('Gender')).toBeNull();
      expect(queryByText('Species')).toBeNull();
      expect(queryByText('Type')).toBeNull();
    });
  });

  // Uses appropriate styles based on character status
  it('should apply appropriate style class based on character status', () => {
    const character: ICharacter = {
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      status: 'Alive',
      episode: [],
      origin: {},
      location: {},
      gender: 'Male',
      species: 'Human',
      type: ''
    };

    const { getByText } = render(<Profile character={character} />);

    const statusButton = getByText('Alive');
    expect(statusButton).toHaveClass('green');
  });

  // Ensures no unnecessary re-renders occur
  it('should not re-render unnecessarily when character data changes', async () => {
    const character = {
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      status: 'Alive',
      episode: [],
      origin: {},
      location: {},
      gender: 'Male',
      species: 'Human',
      type: ''
    };

    fetchMock.mockResponseOnce(JSON.stringify(character));
    const { rerender } = render(<Profile character={character} />);
    const useEffectSpy = jest.spyOn(React, 'useEffect');

    rerender(<Profile character={character} />);

    await waitFor(() => {
      expect(useEffectSpy).toHaveBeenCalledTimes(0);
    });

    useEffectSpy.mockRestore();
  });
});
