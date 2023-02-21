"use strict";

var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement("h1", {}, "Hello from React!");
// const reactElement = React.createElement("header", { className: "side-header" }, React.createElement("h1", {}, "Hello from React!"));

var reactElement = React.createElement(
  "header",
  { className: "side-header" },
  React.createElement(
    "h1",
    null,
    "Hello from JSX!"
  ),
  React.createElement(
    "h2",
    null,
    "React slogan"
  )
);

root.render(reactElement);