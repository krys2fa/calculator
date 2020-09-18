import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div id="button">
    { name }
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
