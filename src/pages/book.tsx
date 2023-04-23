import { useMemo } from 'react';
import { useParams } from '../hooks';
import { books_data } from '../utils';

export const Book = () => {
  const { bookId } = useParams();

  const book = useMemo(
    () => books_data.filter((book) => book.id === parseInt(bookId))[0],
    []
  );

  return (
    <div>
      <h1>Book</h1>
      <h3>{book.title}</h3>
    </div>
  );
};
