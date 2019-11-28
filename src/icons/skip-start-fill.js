import React from 'react';
import PropTypes from 'prop-types';

const SkipStartFill = (props) => {
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
      <path stroke="#000" strokeLinecap="round" d="M6.5 6v8" />
      <path d="M6.903 10.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V6.308c0-.63-.692-1.01-1.232-.696L6.903 9.304a.802.802 0 000 1.393z" />
    </svg>
  );
};

SkipStartFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipStartFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipStartFill;