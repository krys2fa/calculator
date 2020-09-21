/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    let result;
    const { total, next } = this.state;

    if ((total && next) || (!total && next)) {
      result = next;
    }

    if (total && !next) {
      result = total;
    }

    return (
      <div id="app" className="app">
        <Display result={result} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
