import { BOOKS } from './endpoints';
import type { BookResponse } from './types';

export const getBooks = async (page: number): Promise<BookResponse> => {
    const resp = await fetch(BOOKS);
    return resp.json()
}