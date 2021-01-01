import matter from 'gray-matter';
import { array } from 'prop-types';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

export default function Thoughts({ posts }) {
  return (
    <Layout pageTitle="Thoughts">
      <h1 className="text-3xl font-semibold md:text-4xl">Thoughts about...</h1>
      <PostList posts={posts} />
    </Layout>
  );
}

Thoughts.propTypes = {
  posts: array,
};

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        date: new Date(document.data.date).getTime(),
        description: document.data.description || null,
        title: document.data.title,
        slug,
      };
    });
    return data;
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
