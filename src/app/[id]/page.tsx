import React from 'react';
import CharacterPage from '@/components/CharacterPage';
import { getSingleCharacterData } from '../actions';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: number;
  };
};

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
