export const useQueryParams = () => {
  let query = {};
  const search = window.location.search;

  if (search) {
    const queryParams = search.replace('?', '').split('&');
    for (const param of queryParams) {
      const querySegments = param.split('=');
      query = {
        ...query,
        [querySegments[0]]: querySegments[1],
      };
    }
  }

  return query;
};
