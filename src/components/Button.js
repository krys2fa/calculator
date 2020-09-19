import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, wide, color }) => (
  <div
    className="button"
    style={{
      backgroundColor: color ? '#e0e0e0' : '',
      width: wide ? '50%' : '',
    }}
  >
    {name}
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: false,
  wide: false,
};

export default Button;
