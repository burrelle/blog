import { node } from 'prop-types';

export default function ParagraphBlock({ children }) {
  return <p className="mb-4">{children}</p>;
}

ParagraphBlock.propTypes = {
  children: node,
};
