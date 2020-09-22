import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => (
  <div id="panel" className="button-panel">
    <div id="group-1">
      <Button onClick={handleClick} name="AC" color="#e0e0e0" />
      <Button onClick={handleClick} name="+/-" color="#e0e0e0" />
      <Button onClick={handleClick} name="%" color="#e0e0e0" />
      <Button onClick={handleClick} name="÷" />
    </div>
    <div id="group-2">
      <Button onClick={handleClick} name="7" color="#e0e0e0" />
      <Button onClick={handleClick} name="8" color="#e0e0e0" />
      <Button onClick={handleClick} name="9" color="#e0e0e0" />
      <Button onClick={handleClick} name="X" />
    </div>
    <div id="group-3">
      <Button onClick={handleClick} name="4" color="#e0e0e0" />
      <Button onClick={handleClick} name="5" color="#e0e0e0" />
      <Button onClick={handleClick} name="6" color="#e0e0e0" />
      <Button onClick={handleClick} name="-" />
    </div>
    <div id="group-4">
      <Button onClick={handleClick} name="1" color="#e0e0e0" />
      <Button onClick={handleClick} name="2" color="#e0e0e0" />
      <Button onClick={handleClick} name="3" color="#e0e0e0" />
      <Button onClick={handleClick} name="+" />
    </div>
    <div id="group-5">
      <Button onClick={handleClick} name="0" wide color="#e0e0e0" />
      <Button onClick={handleClick} name="." color="#e0e0e0" />
      <Button onClick={handleClick} name="=" />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
