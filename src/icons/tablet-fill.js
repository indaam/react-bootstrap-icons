import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TabletFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
    </svg>
  );
});

TabletFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TabletFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TabletFill;
