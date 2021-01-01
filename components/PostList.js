import { array, number } from 'prop-types';
import Link from 'next/link';
import Highlight from './Highlight';

export default function PostList({ posts, limit = null }) {
  const adjustedLimit = limit || posts.length;
  console.log(posts.map((p) => [p.date, new Date(p.date)]));
  const sortedPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, adjustedLimit);

  return (
    <div className="mt-6 space-y-8">
      {sortedPosts.map(({ title, description, slug, date }, key) => (
        <div key={key} className="flex flex-col space-y-2">
          <h3 className="text-xl md:text-2xl">
            <Highlight>
              <Link href={slug}>
                <a>{title}</a>
              </Link>
            </Highlight>
          </h3>
          <time className="text-sm">{new Date(date).toLocaleDateString()}</time>
          <div>{description}</div>
        </div>
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: array,
  limit: number,
};
