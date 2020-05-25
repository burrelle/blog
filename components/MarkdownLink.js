import { string, node } from 'prop-types';

export default function MarkdownLink({ href, children }) {
  return (
    <a className="underline" href={href}>
      {children}
    </a>
  );
}

MarkdownLink.propTypes = {
  href: string,
  children: node,
};
