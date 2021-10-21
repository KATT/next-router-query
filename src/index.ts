import { useRouter } from 'next/router';
import { useMemo } from 'react';

/**
 * Like `useRouter().query` but will return it on first render
 */
export function useRouterQuery() {
  const router = useRouter();

  const { asPath, query, pathname } = router;
  return useMemo(() => {
    // if we have query params from the router, let's return that
    if (Object.keys(query).length > 0) {
      return query;
    }
    // split path by `/` or `?`
    const pathnameParts = pathname.split(/\/|\?/);

    const loc =
      typeof window !== 'undefined'
        ? {
            query: Object.fromEntries(
              new URLSearchParams(window.location.search)
            ),
            pathname: location.pathname,
          }
        : {
            query,
            pathname: asPath,
          };

    const asPathParts = loc.pathname.split(/\/|\?/);

    // actual query object that we wanna use
    const actualQuery: typeof query = {};
    for (let index = 0; index < pathnameParts.length; index++) {
      const part = pathnameParts[index];
      if (!part.startsWith('[') || !part.endsWith(']')) {
        continue;
      }
      // extract real query param from `post/[id]` style routes

      // removes first and last character
      const key = part.slice(1, -1);
      if (key.startsWith('...')) {
        // catch-all route
        const catchAllKey = key.slice(3);
        actualQuery[catchAllKey] = asPathParts.splice(index);
        break;
      }

      // append to "actual query"
      actualQuery[key] = asPathParts[index];
    }
    for (const key in loc.query) {
      actualQuery[key] = loc.query[key];
    }
    return actualQuery;
  }, [asPath, query, pathname]);
}
