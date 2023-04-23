import { Link, Route, Router } from './components';
import {
  Author,
  AuthorBook,
  Authors,
  Book,
  Books,
  Home,
  NotFound,
} from './pages';

function App() {
  return (
    <Router>
      <h3>Navigation</h3>
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
      <Route path="/" component={<Home />} />
      <Route path="/books" component={<Books />} />
      <Route path="/authors" component={<Authors />} />
      <Route path="/books/:bookId" component={<Book />} />
      <Route path="/authors/:authorId" component={<Author />} />
      <Route path="/authors/:authorId/:bookId" component={<AuthorBook />} />
      <Route path="*" component={<NotFound />} />
    </Router>
  );
}

export default App;
