import React from "react";
import "./calculator.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      op1: 3,
      op2: 1,
      res: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, v) {
    e.preventDefault();
    switch (v) {
      case "op1":
        this.setState({ op1: parseInt(e.target.value, 10) });
        break;
      case "op2":
        this.setState({ op2: parseInt(e.target.value, 10) });
        break;
    }
  }
  handleClick(e, op) {
    e.preventDefault();
    let res1;
    switch (op) {
      case "+":
        res1 = this.state.op1 + this.state.op2;
        break;
      case "-":
        res1 = this.state.op1 - this.state.op2;
        break;
      case "*":
        res1 = this.state.op1 * this.state.op2;
        break;
      case "/":
        res1 = this.state.op1 / this.state.op2;
        break;
      default:
        res1 = 0;
    }
    this.setState({ res: res1 });
  }

  render() {
    return (
      <div>
        <h1> Calculator</h1>
        <div className="Inputs">
          <label Input1>
            <input
              type="text"
              className="InputBox"
              onChange={e => this.handleChange(e, "op1")}
            />
          </label>
          <label Input2>
            <input
              type="text"
              className="InputBox"
              onChange={e => this.handleChange(e, "op2")}
            />
          </label>
        </div>
        <div className="Calc">
          <button onClick={e => this.handleClick(e, "+")} className="btn">
            +
          </button>

          <button onClick={e => this.handleClick(e, "-")} className="btn">
            -
          </button>

          <button onClick={e => this.handleClick(e, "*")} className="btn">
            *
          </button>

          <button onClick={e => this.handleClick(e, "/")} className="btn">
            /
          </button>
        </div>
        <h3> Result: {this.state.res}</h3>
      </div>
    );
  }
}

export default Calculator;
