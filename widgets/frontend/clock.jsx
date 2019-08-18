import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date1: new Date(),
      count: 0
    };
    this.tick = this.tick.bind(this);
  }
  //Write a method, tick that uses setState to set the time to a new Date()
  tick() {
    this.setState({ date1: new Date(), count: this.state.count + 1 });
    if (this.state.count > 10) {
      const root = document.getElementById("root");
      ReactDOM.render(<div> </div>, root);
    }
  }
  // You'll use setInterval to call tick every second,
  // but you should wait until the component is actually on th
  // e page.For this, you can define a componentDidMount function.
  componentDidMount() {
    //   this.setState({ date: this.state.date.getSeconds() });

    this.id = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    debugger;
    clearInterval(this.id);
  }

  render() {
    var id;
    return (
      <div>
        <h1>My Awesome Clock!</h1>

        <h1 id="clk">{this.state.date1.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
