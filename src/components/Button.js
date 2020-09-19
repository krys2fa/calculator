import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, wide, color }) => (
  <div
    className="button"
    style={{
      backgroundColor: color,
      width: wide ? '50%' : '',
    }}
  >
    {name}
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
