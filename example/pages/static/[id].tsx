import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useRouterQuery } from 'next-router-query';
import ShowDifference from '../post/[id]';

export default function MyPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const searchParams = useRouterQuery();
  const id = (props.id || searchParams.id) as string;
  // now `id` is always a string on first render

  return (
    <>
      <h1>Viewing ID#{id}</h1>
      <p>Data: {props.data || <em>Generating SSG-page for you</em>}</p>

      <hr />
      <ShowDifference />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const id = context.params!.id;
  return {
    props: {
      id,
      data: 'We got some results!',
    },
  };
}
