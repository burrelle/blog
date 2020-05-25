import { node, bool, number } from 'prop-types';

export default function ListBlock({ ordered, children, start }) {
  if (ordered) {
    return (
      <ol className="mb-2 list-decimal list-inside" start={start}>
        {children}
      </ol>
    );
  }

  return <ul className="mb-2 list-disc list-inside">{children}</ul>;
}

ListBlock.propTypes = {
  ordered: bool,
  children: node,
  start: number,
};
