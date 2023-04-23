import { useRouter } from './router';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  query?: { [key: string]: string };
}
export const Link = ({ to, children, query }: LinkProps) => {
  const { activePath, setActivePath } = useRouter();

  const navigate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    // if the clicked route is not already renderd
    // push new state to stack history
    if (activePath !== to) {
      setActivePath(to);
      let querystring = '';
      if (query) {
        querystring =
          '?' +
          Object.keys(query)
            .map((queryKey) => `${queryKey}=${query[queryKey]}`)
            .join('&');
      }
      window.history.pushState(null, '', `${to}${querystring}`);
    } else {
      return;
    }
  };

  return (
    <a href={to} onClick={navigate}>
      {children}
    </a>
  );
};
