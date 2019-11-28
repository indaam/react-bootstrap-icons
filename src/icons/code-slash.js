import React from 'react';
import PropTypes from 'prop-types';

const CodeSlash = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M6.854 6.146a.5.5 0 010 .708L3.707 10l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L16.293 10l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 11-.955-.294l4-13a.5.5 0 01.625-.33z"
        clipRule="evenodd"
      />
    </svg>
  );
};

CodeSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeSlash.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CodeSlash;