import { getSingleCharacterData } from "@/app/actions";

describe('getSingleCharacterData', () => {
  // fetches character data successfully for a valid character ID
  it('should return character data when a valid character ID is provided', async () => {
    const mockCharacterData = { id: 1, name: 'John Doe' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacterData),
    });

    const result = await getSingleCharacterData(1);
    expect(result).toEqual(mockCharacterData);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // handles non-existent character ID gracefully
  it('should return null when a non-existent character ID is provided', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({ error: 'Character not found' }),
    });

    const result = await getSingleCharacterData(999);
    expect(result).toBeNull();
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/999`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // returns character data in the expected format
  it('should return character data in the expected format when a valid character ID is provided', async () => {
    const mockCharacterData = { id: 1, name: 'John Doe' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacterData),
    });

    const result = await getSingleCharacterData(1);
    expect(result).toEqual(mockCharacterData);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // handles API response with status 200 correctly
  it('should handle API response with status 200 correctly', async () => {
    const mockCharacterData = { id: 1, name: 'John Doe' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacterData),
    });

    const result = await getSingleCharacterData(1);
    expect(result).toEqual(mockCharacterData);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // handles invalid character ID (e.g., negative number, zero)
  it('should return null when an invalid character ID is provided', async () => {
    const invalidCharacterId = -1;
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({ error: 'Character not found' }),
    });

    const result = await getSingleCharacterData(invalidCharacterId);
    expect(result).toBeNull();
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/-1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // handles network errors or timeouts
  it('should handle network errors or timeouts', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch data'));

    const result = await getSingleCharacterData(1);
    expect(result).toBeNull();
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // returns null if fetch operation fails
  it('should return null when fetch operation fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, json: jest.fn().mockResolvedValue({ error: 'Not found' }) });

    const result = await getSingleCharacterData(1);
    expect(result).toBeNull();
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // uses correct API endpoint based on environment variable
  it('should use correct API endpoint based on environment variable', async () => {
    process.env.api_service = 'https://example-api.com';
    const mockCharacterData = { id: 1, name: 'John Doe' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacterData),
    });

    await getSingleCharacterData(1);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});
