import { useMemo } from 'react';
import { useParams } from '../hooks';
import { books_data, authors_data } from '../utils';

export const AuthorBook = () => {
  const { bookId, authorId } = useParams();
  const book = useMemo(
    () => books_data.filter((book) => book.id === parseInt(bookId))[0],
    []
  );

  const author = useMemo(
    () => authors_data.filter((author) => author.id === parseInt(authorId))[0],
    []
  );
  return (
    <div>
      <h1>Author Books</h1>
      <p>{book.title}</p>
      <p>{author.name}</p>
    </div>
  );
};
