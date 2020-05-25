import { node, string } from 'prop-types';
import classNames from 'classnames';

export default function Highlight({ children, additionalClasses = '' }) {
  const classes = classNames('text-blue-900 border-b-2', additionalClasses);

  return <b className={classes}>{children}</b>;
}

Highlight.propTypes = {
  children: node,
  additionalClasses: string,
};
