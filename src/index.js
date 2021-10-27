var React = require("react");

var ReactDOM = require("react-dom");

import { add, sub, multiply, divide } from "./calculator";

ReactDOM.render(
  <div>
    <h1>{add(1, 2)}</h1>
    <h1>{sub(1, 2)}</h1>
    <h1>{multiply(1, 2)}</h1>
    <h1>{divide(1, 2)}</h1>
  </div>,
  document.getElementById("root")
);
