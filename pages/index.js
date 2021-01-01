import matter from 'gray-matter';
import { array } from 'prop-types';
import Layout from '../components/Layout';
import Highlight from '../components/Highlight';
import PostList from '../components/PostList';

export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <h1 className="text-3xl font-semibold md:text-4xl">Evan Burrell</h1>
      <p className="mt-4">Software Developer.</p>
      <p className="mt-4">
        Passionate about <Highlight>PHP</Highlight>,
        <Highlight additionalClasses="ml-2">Laravel</Highlight>, and
        <Highlight additionalClasses="ml-2">Javascript</Highlight>.
      </p>
      <PostList posts={posts} limit={3} />
    </Layout>
  );
}

Home.propTypes = {
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
