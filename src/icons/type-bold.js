import React from 'react';
import PropTypes from 'prop-types';

const TypeBold = (props) => {
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
        d="M10.662 14H6.865V5.545h3.697c1.641 0 2.62.803 2.62 2.11 0 .896-.662 1.675-1.53 1.804v.105c1.12.088 1.934.926 1.934 2.016 0 1.488-1.12 2.42-2.924 2.42zM8.635 6.857v2.204h1.33c.955 0 1.476-.399 1.476-1.102 0-.691-.486-1.102-1.33-1.102H8.635zm1.576 5.825H8.635v-2.455h1.535c1.043 0 1.611.421 1.611 1.213 0 .808-.55 1.242-1.57 1.242z"
        clipRule="evenodd"
      />
    </svg>
  );
};

TypeBold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TypeBold.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TypeBold;