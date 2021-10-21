import { useRouter } from 'next/router';
import { useRouterQuery } from 'next-router-query';
import { useRef } from 'react';

export function ShowDifference() {
  const nativeQuery = useRouter().query;
  const myQuery = useRouterQuery();
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;
  if (!process.browser) {
    return null;
  }

  console.log(`--------- Render #${renderCount.current}  --------`);
  console.log('useRouter().query result:', nativeQuery);
  console.log('useRouterQuery() result:', myQuery);
  console.log(`--------- Render #${renderCount.current}  --------`);

  return (
    <div>
      <p>Open inspector to see the difference</p>
      <h2>
        <code>useRouterQuery()</code> output
      </h2>
      <em>
        If you see flicker here it&apos;s probably only the keys re-ordering
        after Next.js returns with values
      </em>
      <pre>
        <pre>{JSON.stringify(myQuery, null, 4)}</pre>
      </pre>
      <h2>
        <code>useRouter().query</code> output
      </h2>
      <pre>
        <em>Reload and notice the slight flickering below</em>
        <pre>{JSON.stringify(nativeQuery, null, 4)}</pre>
      </pre>
    </div>
  );
}
