import { Link } from '../components';

export const Layout = ({ page }: { page?: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '220px',
          height: '100vh',
          backgroundColor: 'lightgray',
          padding: 10,
        }}
      >
        <p style={{ fontSize: 24, fontWeight: 'bold' }}>React router Clone</p>
        <ul>
          <li>
            <Link to={'/'}>home</Link>
          </li>
          <li>
            <Link to={'/books'}>books</Link>
          </li>
          <li>
            <Link to={'/authors'}>authors</Link>
          </li>
        </ul>
      </div>
      <div style={{ padding: 10 }}>{page}</div>
    </div>
  );
};
