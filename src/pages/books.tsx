import { Link } from '../components';

export const Books = () => {
  return (
    <div>
      <h1>Books</h1>
      <ol>
        <li>
          <Link to="/books/1">Introduction to Java</Link>
        </li>
        <li>
          <Link to="/books/2">Introduction to Python</Link>
        </li>
        <li>
          <Link to="/books/3">Introduction to Rust</Link>
        </li>
      </ol>
    </div>
  );
};
