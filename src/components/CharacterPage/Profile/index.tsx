import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Item from './Item';
import styles from './profile.module.css';

type Props = {
  character: ICharacter;
};

interface LocationData {
  name: string;
  type: string;
  dimension: string;
}

interface EpisodeData {
  name: string;
  episode: string;
}

/**
 * Profile component displays detailed information about a character.
 * It fetches and displays data about the character's first episode, origin, and last known location.
 *
 * @param {Props} character - The character object containing information to be displayed.
 * @returns {JSX.Element} A React component displaying the character's details.
 */
function Profile({ character }: Props) {
  const dots: { [key: string]: string } = {
    'Alive': 'green',
    'Dead': 'red',
    'unknown': 'gray',
  };

  const [firstEpisode, setFirstEpisode] = useState<EpisodeData | null>(null);
  const [origin, setOrigin] = useState<LocationData | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);

  function loadData<T>(url: string, callback: (response: T | null) => void) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((err) => callback(null));
  }

  useEffect(() => {
    if (character?.episode && character.episode[0]) loadData(character.episode[0], setFirstEpisode);
    if (character.origin?.url) loadData(character.origin.url, setOrigin);
    if (character.location?.url) loadData(character.location.url, setLocation);
  }, [character.episode, character.location?.url, character.origin?.url]);

  return (
    <div className={styles.content}>
      <div className={styles['order-counter']}>
        {character.image && <Image src={character.image} alt="Avatar" width={150} height={150} />}
        <span>{character.name}</span>
        <button className={styles[dots[character.status ?? 'unknown' as string]]} type="button">{character.status ?? 'unknown'}</button>
        <div>
          <div>
            <span>First seen in</span>
            <h2>{`Name ${origin?.name ?? 'Unknown'}`}</h2>
            <h2>{origin?.dimension ?? 'Unknown'}</h2>
            <h2>{`Type ${origin?.type ?? 'Unknown'}`}</h2>
          </div>
          <span className={styles.rect} />
          <div>
            <span>Last known location</span>
            <h2>{`Name ${location?.name ?? 'Unknown'}`}</h2>
            <h2>{location?.dimension ?? 'Unknown'}</h2>
            <h2>{`Type ${location?.type ?? 'Unknown'}`}</h2>
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
              <Item sub="First episode" info={`${firstEpisode.episode} - ${firstEpisode.name}`} />
            </>
          )
        }
      </div>
    </div>
  );
}

export default Profile;
