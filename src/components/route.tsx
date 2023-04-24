import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from './router';
import { isPathMatches } from '../utils';

interface PathRouteProps {
  path: string;
  component: React.ReactElement;
}

const PathRoute = ({ path, component }: PathRouteProps) => {
  const { activePath, routes, setRoutes } = useRouter();
  const [hasToRender, setHasToRender] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    // register application route omMount of the route component
    if (isMounted.current) {
      setRoutes((prev) => [...prev, { path, component }]);
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  // each route component should listen to active link
  // so we can know the we should render the ui of
  // the current active route or no
  useEffect(() => {
    if (routes.length > 0) {
      const route = routes.find((route) =>
        isPathMatches(activePath, route.path)
      );
      if (route) {
        if (route?.path === path) {
          setHasToRender(true);
        } else setHasToRender(false);
      } else {
        // 404 page
        if (path === routes[routes.length - 1].path) setHasToRender(true);
        else setHasToRender(false);
      }
    }
  }, [activePath, routes]);

  if (hasToRender) return component;
  return null;
};

interface LayoutRouteProps {
  component: React.ReactElement;
  children: React.ReactNode;
}

const LayoutRoute = ({ component, children }: LayoutRouteProps) => {
  return React.cloneElement(component, {
    page: Array.isArray(children)
      ? children.map((route, idx) => (
          <PathRoute
            key={idx}
            path={route.props.path}
            component={route.props.component}
          />
        ))
      : null,
  });
};

type RouteProps = PathRouteProps | LayoutRouteProps;

export const Route = ({ ...props }: RouteProps) => {
  if ('children' in props) {
    return (
      <LayoutRoute component={props.component}>{props.children}</LayoutRoute>
    );
  }
  return <PathRoute path={props.path} component={props.component} />;
};
