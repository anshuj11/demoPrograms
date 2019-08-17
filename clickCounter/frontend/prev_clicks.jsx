import React from "react";

class PrevClicks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.map(datum => (
          <li>{datum}</li>
        ))}
      </div>
    );
  }
}

export default PrevClicks;
