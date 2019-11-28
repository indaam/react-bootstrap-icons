import React from 'react';
import PropTypes from 'prop-types';

const XCircleFill = (props) => {
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
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.354 6.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

XCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default XCircleFill;