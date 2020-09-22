import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    let result;
    const { total, next, operation } = this.state;

    if ((total && next) || (!total && next)) {
      result = next;
    }

    if ((total && !next) || (operation === '=')) {
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
