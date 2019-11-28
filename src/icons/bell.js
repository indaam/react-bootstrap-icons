import React from 'react';
import PropTypes from 'prop-types';

const Bell = (props) => {
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
      <path d="M10 18a2 2 0 002-2H8a2 2 0 002 2z" />
      <path
        fillRule="evenodd"
        d="M10 3.918l-.797.161A4.002 4.002 0 006 8c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C14.134 10.197 14 8.628 14 8a4.002 4.002 0 00-3.203-3.92L10 3.917zM16.22 14c.223.447.482.801.78 1H3c.299-.199.557-.553.78-1C4.68 12.2 5 8.88 5 8c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0115 8c0 .88.32 4.2 1.22 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bell.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Bell;