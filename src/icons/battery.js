import React from 'react';
import PropTypes from 'prop-types';

const Battery = (props) => {
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
        d="M14 7H4a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1zM4 6a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2H4z"
        clipRule="evenodd"
      />
      <path d="M16.5 11.5a1.5 1.5 0 000-3v3z" />
    </svg>
  );
};

Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Battery.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Battery;