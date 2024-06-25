import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Item from './Item';
import styles from './profile.module.css';

type Props = {
  character: ICharacter;
};

function Profile({ character }: Props) {
  const dots: { [key: string]: string } = {
    'Alive': 'green',
    'Dead': 'red',
    'Unknown': 'gray',
  };

  const [firstEpisode, setFirstEpisode] = useState<{ episode: string, name: string } | null>(null);

  useEffect(() => {
    const loadEpisode = async () => {
      await fetch(character.episode[0])
        .then((response) => response.json())
        .then(({ episode, name }) => setFirstEpisode({ episode, name }))
        .catch((err) => setFirstEpisode(null));
    }

    loadEpisode();
    return () => {
      loadEpisode();
    };
  }, [character.episode]);

  return (
    <div className={styles.content}>
      <div className={styles['order-counter']}>
        <Image src={character.image} alt="Avatar" width={150} height={150} />
        <span>{character.name}</span>
        <button className={styles[dots[character.status as string]]} type="button">{character.status}</button>
        <div>
          <div>
            <span>Last known location</span>
            <h2>{character.location.name}</h2>
          </div>
          <span className={styles.rect} />
          <div>
            <span>First seen in</span>
            <h2>{character.origin.name}</h2>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {character.gender && <Item sub="Gender" info={character.gender} />}
        {character.species && <Item sub="Species" info={character.species} />}
        {character.type && <Item sub="Type" info={character.type} />}
        {
          (firstEpisode !== null) && (
            <>
              <Item sub="First episode" info={firstEpisode.name} />
              <Item sub="Episode code" info={firstEpisode.episode} />
            </>
          )
        }
      </div>
    </div>
  );
}

export default Profile;
