import React from "react";

export default ({ data }) => (
  <div>
    {data.map(datum => (
      <li>{datum}</li>
    ))}
  </div>
);
