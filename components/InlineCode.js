import { node } from 'prop-types';

export default function InlineCode({ children }) {
  return (
    <code className="p-1 text-blue-900 bg-blue-100 rounded">{children}</code>
  );
}

InlineCode.propTypes = {
  children: node,
};
