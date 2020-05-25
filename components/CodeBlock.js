import { string } from 'prop-types';
import Highlight from 'react-highlight';

export default function CodeBlock({ value }) {
  return (
    <div>
      <Highlight className="text-xs rounded md:text-sm lg:text-base">
        {value}
      </Highlight>
      <br />
    </div>
  );
}

CodeBlock.propTypes = {
  value: string,
};
