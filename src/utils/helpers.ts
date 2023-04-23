import { PARAM_PREFIX } from './constant';

export const isPathMatches = (activePath: string, path: string) => {
  // if the path includes : which indicate url params
  if (path.includes(PARAM_PREFIX)) {
    const activePathSegments = activePath.split('/');
    const pathSegments = path.split('/');
    if (activePathSegments.length === pathSegments.length) {
      let isMatch = true;
      for (const [index, segment] of pathSegments.entries()) {
        if (segment === activePathSegments[index]) {
          continue;
        } else if (
          segment.includes(PARAM_PREFIX) &&
          activePathSegments[index] != null
        ) {
          continue;
        } else {
          isMatch = false;
        }
      }
      return isMatch;
    } else {
      return false;
    }
  } else {
    // if not normal check will be enough
    return activePath === path;
  }
};
