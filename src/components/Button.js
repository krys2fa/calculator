import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, wide, color, onClick,
}) => {
  const handleClick = name => onClick(name);

  return (
    <button
      style={{
        backgroundColor: color,
        width: wide ? '50%' : '',
      }}
      className="button"
      type="button"
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
