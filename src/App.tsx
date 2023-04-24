import { Route, Router } from './components';
import {
  Author,
  AuthorBook,
  Authors,
  Book,
  Books,
  Home,
  Layout,
  NotFound,
} from './pages';

function App() {
  return (
    <Router>
      <Route component={<Layout />}>
        <Route path="/" component={<Home />} />
        <Route path="/books" component={<Books />} />
        <Route path="/authors" component={<Authors />} />
        <Route path="/books/:bookId" component={<Book />} />
        <Route path="/authors/:authorId" component={<Author />} />
        <Route path="/authors/:authorId/:bookId" component={<AuthorBook />} />
        <Route path="*" component={<NotFound />} />
      </Route>
    </Router>
  );
}

export default App;
