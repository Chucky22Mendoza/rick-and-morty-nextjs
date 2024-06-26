'use server';

/**
 * Fetches process data from the API based on the provided page number and optional name filter.
 *
 * @param page The page number to fetch data from (default is 1).
 * @param name The optional name filter to apply to the data.
 * @returns A promise that resolves to the response data from the API.
 */
export async function getProcessData(page: number = 1, name: string | null = null): Promise<IResponseData> {
  try {
    const response = await fetch(`${process.env.api_service}/character/?page=${page}${name ? `&name=${name}` : ''}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const result = await response.json();
      console.error(result);
      throw new Error('Failed to fetch data');
    }

    const resJson = await response.json();
    return resJson as IResponseData;
  } catch (error) {
    console.log(error);
    return {
      results: [],
      info: {
        count: 0,
        next: '',
        pages: 0,
        prev: '',
      }
    };
  }
}

/**
 * Fetches data for a single character from the API based on the provided character ID.
 *
 * @param characterId The ID of the character to fetch data for.
 * @returns A promise that resolves to the character data from the API, or null if the character is not found.
 */
export async function getSingleCharacterData(characterId: number): Promise<ICharacter | null> {
  try {
    const response = await fetch(`${process.env.api_service}/character/${characterId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const result = await response.json();
      console.error(result);
      throw new Error('Failed to fetch data');
    }

    const resJson = await response.json();
    return resJson as ICharacter;
  } catch (error) {
    console.log(error);
    return {} as ICharacter;
  }
}