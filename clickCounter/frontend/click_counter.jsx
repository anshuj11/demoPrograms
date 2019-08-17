import React from "react";

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      prevClk: []
    };
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }
  handleReset(e) {
    e.preventDefault();
    const prevClk = this.state.prevClk;
    prevClk.push(this.state.count);
    this.setState({ count: 0, prevClk });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click Me!</button>
        <div>{this.state.count}</div>
        <button onClick={this.handleReset.bind(this)}>Reset</button>
        <div>
          {this.state.prevClk.map(clk => (
            <li>{clk}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default ClickCounter;
