import { getProcessData } from "@/app/actions";

describe('getProcessData', () => {
  // fetches data successfully with default page number
  it('should fetch data successfully with default page number', async () => {
    const mockResponse = {
      results: [{ id: 1, name: 'Test Character' }],
      info: { count: 1, next: '', pages: 1, prev: '' }
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const data = await getProcessData();

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/?page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // handles network errors gracefully
  it('should handle network errors gracefully', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));

    const data = await getProcessData();

    expect(data).toEqual({
      results: [],
      info: {
        count: 0,
        next: '',
        pages: 0,
        prev: '',
      }
    });
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/?page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // fetches data successfully with specified page number
  it('should fetch data successfully with specified page number', async () => {
    const mockResponse = {
      results: [{ id: 1, name: 'Test Character' }],
      info: { count: 1, next: '', pages: 1, prev: '' }
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const data = await getProcessData(2);

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/?page=2`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // fetches data successfully with specified page number and name filter
  it('should fetch data successfully with specified page number and name filter', async () => {
    const mockResponse = {
      results: [{ id: 1, name: 'Test Character' }],
      info: { count: 1, next: '', pages: 1, prev: '' }
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const data = await getProcessData(2, 'TestName');

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/?page=2&name=TestName`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // returns parsed JSON data when response is successful
  it('should return parsed JSON data when response is successful', async () => {
    const mockResponse = {
      results: [{ id: 1, name: 'Test Character' }],
      info: { count: 1, next: '', pages: 1, prev: '' }
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const data = await getProcessData();

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/?page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // handles cases where API returns empty results
  it('should handle empty results from API', async () => {
    const mockResponse = {
      results: [],
      info: { count: 0, next: '', pages: 0, prev: '' }
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const data = await getProcessData();

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${process.env.api_service}/character/?page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});
