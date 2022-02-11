import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
    </div>
  );
}
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
