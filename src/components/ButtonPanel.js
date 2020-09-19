import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div id="panel" className="button-panel">
    <div id="group-1">
      <Button name="AC" color="#e0e0e0" />
      <Button name="+/-" color="#e0e0e0" />
      <Button name="%" color="#e0e0e0" />
      <Button name="÷" />
    </div>
    <div id="group-2">
      <Button name="7" color="#e0e0e0" />
      <Button name="8" color="#e0e0e0" />
      <Button name="9" color="#e0e0e0" />
      <Button name="X" />
    </div>
    <div id="group-3">
      <Button name="4" color="#e0e0e0" />
      <Button name="5" color="#e0e0e0" />
      <Button name="6" color="#e0e0e0" />
      <Button name="-" />
    </div>
    <div id="group-4">
      <Button name="1" color="#e0e0e0" />
      <Button name="2" color="#e0e0e0" />
      <Button name="3" color="#e0e0e0" />
      <Button name="+" />
    </div>
    <div id="group-5">
      <Button name="0" wide color="#e0e0e0" />
      <Button name="." color="#e0e0e0" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
