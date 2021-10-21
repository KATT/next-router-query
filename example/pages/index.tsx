import Link from 'next/link';

export default function IndexPage() {
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
      </ul>
    </>
  );
}
