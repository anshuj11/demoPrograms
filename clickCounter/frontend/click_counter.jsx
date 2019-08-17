import React from "react";
import PrevClicks from "./prev_clicks";

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
                <PrevClicks data={this.state.prevClk}/>
        </div>
      </div>
    );
  }
}

export default ClickCounter;
