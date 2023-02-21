"use strict";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement("h1", {}, "Hello from React!");
// const reactElement = React.createElement("header", { className: "side-header" }, React.createElement("h1", {}, "Hello from React!"));

const reactElement = (
  <header className="side-header">
    <h1>Hello from JSX!</h1>
    <h2>React slogan</h2>
  </header>
);

root.render(reactElement);
