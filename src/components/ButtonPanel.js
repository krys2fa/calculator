import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div id="panel" className="button-panel">
    <div id="group-1">
      <Button name="AC" color />
      <Button name="+/-" color />
      <Button name="%" color />
      <Button name="÷" />
    </div>
    <div id="group-2">
      <Button name="7" color />
      <Button name="8" color />
      <Button name="9" color />
      <Button name="X" />
    </div>
    <div id="group-3">
      <Button name="4" color />
      <Button name="5" color />
      <Button name="6" color />
      <Button name="-" />
    </div>
    <div id="group-4">
      <Button name="1" color />
      <Button name="2" color />
      <Button name="3" color />
      <Button name="+" />
    </div>
    <div id="group-5">
      <Button name="0" wide color />
      <Button name="." color />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
