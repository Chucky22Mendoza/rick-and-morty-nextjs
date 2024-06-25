'use server';

import { IResponseData } from "..";

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