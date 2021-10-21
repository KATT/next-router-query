import { useRouter } from 'next/router';
import { useRouterQuery } from 'next-router-query';
export default function PostId() {
  const nativeQuery = useRouter().query;
  const myQuery = useRouterQuery();

  return (
    <div>
      <h2>
        <code>useRouterQuery()</code> output
      </h2>
      <pre>
        <pre>{JSON.stringify(myQuery, null, 4)}</pre>
      </pre>
      <h2>
        <code>useRouter().query</code> output
      </h2>
      <pre>
        <pre>{JSON.stringify(nativeQuery, null, 4)}</pre>
      </pre>
    </div>
  );
}
