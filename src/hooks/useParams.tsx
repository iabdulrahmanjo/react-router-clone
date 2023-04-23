import { useMemo } from 'react';
import { useRouter } from '../components';
import { PARAM_PREFIX, isPathMatches } from '../utils';

type Params = { [key: string]: string };

export const useParams = () => {
  const { activePath, routes } = useRouter();

  const route = useMemo(
    () => routes.find((route) => isPathMatches(activePath, route.path)),
    []
  );

  if (route) {
    let params: Params = {};
    const pathSegments = route.path.split('/');
    const activeRouteSegement = activePath.split('/');
    for (const [index, path] of pathSegments.entries()) {
      if (path.includes(PARAM_PREFIX)) {
        const param = path.replace(PARAM_PREFIX, '');
        params = {
          ...params,
          [param]: activeRouteSegement[index],
        };
      }
    }
    return params;
  }

  return {};
};
