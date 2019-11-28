// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const number = [1, 2, 3, 4, 5];

// -----------------------------------------------------
function map(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let newValue = callback(array[i], i, array);
    result.push(newValue);
  }

  return result;
}

console.log(map([1, 2, 3, 4, 5], x => x * 2));
console.log(map([1, 2, 3, 4, 5], (x, idx) => idx));
console.log(map([1, 2, 3, 4, 5], (x, idx, arr) => arr));

ReactDOM.render(App(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
