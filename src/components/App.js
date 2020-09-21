/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <div id="app" className="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
