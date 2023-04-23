import { Link } from '../components';

export const Authors = () => {
  return (
    <div>
      <h1>Authors</h1>
      <ol>
        <li>
          <Link to="/authors/1">Ali Ahmad</Link>
        </li>
        <li>
          <Link to="/authors/2">Khalid Mohammed</Link>
        </li>
        <li>
          <Link to="/authors/3">Hani Ali</Link>
        </li>
      </ol>
    </div>
  );
};
