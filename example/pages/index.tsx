import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function IndexPage() {
  const [staticId, setStaticId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setStaticId(Math.random()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>
        Open the inspector &amp; navigate to a page below to see the difference
        in results - the code can be viewed at{' '}
        <a href="./example/components/ShowDifference.tsx">
          <code>
            github.com/KATT/next-router-query/example/components/ShowDifference.tsx
          </code>
        </a>
      </p>
      <ul style={{ fontSize: '1.25rem' }}>
        <li>
          <Link href="/post/myId">
            <a>
              <code>post/[id].tsx</code>
            </a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: 'post/myId',
              query: {
                key: 'value',
              },
            }}
          >
            <a>
              <code>post/[id].tsx</code>
            </a>
          </Link>{' '}
          with a <code>?search</code>-param
        </li>
        <li>
          <Link href="/pokemon/gotta/catch/them/all">
            <a>
              <code>pokemon/[...all].tsx</code>
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/static/${staticId}`}>
            <a>
              <code>static/[id].tsx</code>
            </a>
          </Link>{' '}
          - static page rendering with <code>fallback: true</code>
        </li>
      </ul>
    </>
  );
}
