import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TreeFill = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M8 0a.5.5 0 0 1 .416.223l3 4.5A.5.5 0 0 1 11 5.5h-.098l2.022 3.235a.5.5 0 0 1-.424.765h-.191l1.638 3.276a.5.5 0 0 1-.447.724h-11a.5.5 0 0 1-.447-.724L3.69 9.5H3.5a.5.5 0 0 1-.424-.765L5.098 5.5H5a.5.5 0 0 1-.416-.777l3-4.5A.5.5 0 0 1 8 0z"
      />
      <path d="M7 13h2v3H7v-3z" />
    </svg>
  );
});

TreeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TreeFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TreeFill;
