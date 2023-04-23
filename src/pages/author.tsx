import { useMemo } from 'react';
import { useParams } from '../hooks';
import { authors_data, books_data } from '../utils';
import { Link } from '../components';

export const Author = () => {
  const { authorId } = useParams();
  const author = useMemo(
    () => authors_data.filter((author) => author.id === parseInt(authorId))[0],
    []
  );

  return (
    <div>
      <h1>Author</h1>
      <h2>{author.name}</h2>
      <Link to={`/authors/${author.id}/${books_data[0].id}`}>
        {books_data[0].title}
      </Link>
    </div>
  );
};
