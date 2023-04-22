import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface RouterProps {
  children: React.ReactNode;
}

interface Route {
  path: string;
  component: React.ReactNode;
}

interface Context {
  routes: Array<Route>;
  activePath: string;
  setRoutes: React.Dispatch<React.SetStateAction<Route[]>>;
  setActivePath: React.Dispatch<React.SetStateAction<string>>;
}

const RouterContext = createContext<Context>({
  routes: [],
  activePath: '/',
  setRoutes: () => null,
  setActivePath: () => null,
});

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context)
    throw new Error("you can't use useRouter outside of Router context");
  return context;
};

export const Router = ({ children }: RouterProps) => {
  const [routes, setRoutes] = useState<Array<Route>>([]);
  const [activePath, setActivePath] = useState<string>('/');

  const RouterValue = useMemo(() => {
    return {
      routes,
      activePath,
      setRoutes,
      setActivePath,
    };
  }, [routes, activePath]);

  useEffect(() => {
    // on first render we will chaeck loaction url
    // in the browser bar then set the current activeLink to it
    const path = location.pathname;
    if (path !== activePath) setActivePath(path);

    const historyListner = (event: PopStateEvent) => {
      const popstateEvent = event.target as { location?: { pathname: string } };
      const path = popstateEvent?.location?.pathname ?? '/';
      setActivePath(path);
    };

    // setup a lisnter for the forward and backward functionality
    // of the broswer history
    window.addEventListener('popstate', historyListner);
    () => window.removeEventListener('popstate', historyListner);
  }, []);

  return (
    <RouterContext.Provider value={RouterValue}>
      {children}
    </RouterContext.Provider>
  );
};
