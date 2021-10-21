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
      <ul>
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
              <code>post/[id].tsx</code> with a <code>?search</code>-param
            </a>
          </Link>
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
              <code>static/[id].tsx</code> - static page rendering with{' '}
              <code>fallback: true</code>
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}
