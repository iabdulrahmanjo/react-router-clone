import { Link, Route } from './components';
import Home from './pages';
import NotFound from './pages/404';
import Authors from './pages/authors';
import Books from './pages/books';

function App() {
  return (
    <>
      <Route path="/" component={<Home />} />
      <Route path="/books" component={<Books />} />
      <Route path="/authors" component={<Authors />} />
      <Route path="*" component={<NotFound />} />
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
    </>
  );
}

export default App;
