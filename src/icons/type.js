import React from 'react';
import PropTypes from 'prop-types';

const Type = (props) => {
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
        d="M15.144 14l-.774-2.285h-3.222L10.368 14H9.021l3.052-8.455h1.412L16.538 14h-1.394zm-8.252-1.523L7.407 14h.93L6.302 8.363H5.36L3.325 14h.899l.52-1.523h2.148zm-1.926-.704l.82-2.414h.067l.816 2.414H4.966zm6.515-1.113l1.23-3.62h.1l1.225 3.62h-2.555z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Type.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Type.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Type;