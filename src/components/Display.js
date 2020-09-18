import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div id="result">
    { result }
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'O',
};
