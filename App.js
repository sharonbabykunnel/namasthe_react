import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement("div", null, [
  React.createElement("div", null, [
    React.createElement("h1", null, "Hi This is h1 tag"),
    React.createElement("h2", null, "Hi This is h2 tag"),
  ]),
  React.createElement("div", null, [
    React.createElement("h1", null, "Hi This is h1 tag"),
    React.createElement("h2", null, "Hi This is h2 tag"),
  ]),
]);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
