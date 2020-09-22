import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, wide, color, handleClick,
}) => (
  <button
    style={{
      backgroundColor: color,
      width: wide ? '50%' : '',
    }}
    className="button"
    type="button"
    onClick={handleClick}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
