import matter from 'gray-matter';
import { string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ParagraphBlock from '../components/ParagraphBlock';
import ListBlock from '../components/ListBlock';
import ThematicBreak from '../components/ThematicBreak';
import InlineCode from '../components/InlineCode';
import MarkdownLink from '../components/MarkdownLink';

export default function Post({ title, markdownBody, date, description }) {
  return (
    <Layout pageTitle={title}>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ev_burrell" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <h1 className="mb-4 text-xl font-semibold md:text-2xl">{title}</h1>
      <time>{date}</time>
      <div className="mt-4 break-words">
        <ReactMarkdown
          source={markdownBody}
          renderers={{
            code: CodeBlock,
            paragraph: ParagraphBlock,
            list: ListBlock,
            thematicBreak: ThematicBreak,
            inlineCode: InlineCode,
            link: MarkdownLink,
          }}
        />
      </div>
    </Layout>
  );
}

Post.propTypes = {
  markdownBody: string,
  title: string,
  date: string,
  description: string,
};

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../posts/${postname}.md`);
  const data = matter(content.default);

  return {
    props: {
      title: data.data.title,
      date: new Date(data.data.date).toLocaleDateString(),
      markdownBody: data.content,
      description: data.data.description,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../posts', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
