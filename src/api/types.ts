export type BookResponse = {
    count: number,
    next: string,
    previous: string,
    results: Array<Book>
};

export type Book = {
    BookID: number;
    BookName: string;
    NumberOfCopies: number;
};
