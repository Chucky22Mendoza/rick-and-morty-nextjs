import React from 'react';
import CharacterPage from '@/components/CharacterPage';
import { getSingleCharacterData } from '../actions';
import { notFound } from 'next/navigation';

type Props = {
  /**
   * Defines a TypeScript object type 'Params' with a single property 'id' of type number representing a Character ID.
   */
  params: {
    /**
     * Character ID of type number.
     */
    id: number;
  };
};

/**
 * Asynchronous function that fetches data for a single character based on the provided character ID.
 * If the data is successfully fetched, it renders the CharacterPage component with the retrieved character data.
 * If the data fetching fails, it redirects to a not found page.
 *
 * @param {Props} params - Object containing the character ID to fetch data for.
 * @returns {JSX.Element} - Returns the CharacterPage component with the fetched character data.
 */
async function page({ params }: Props) {
  const processData = await getSingleCharacterData(params.id);

  if (!processData) {
    notFound();
  }

  return (
    <CharacterPage character={processData} />
  );
}

export default page;
