import { useRouter } from './router';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}
export const Link = ({ to, children }: LinkProps) => {
  const { activePath, setActivePath } = useRouter();

  const navigate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    // if the clicked route is not already renderd
    // push new state to stack history
    if (activePath !== to) {
      setActivePath(to);
      window.history.pushState({}, '', to);
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
