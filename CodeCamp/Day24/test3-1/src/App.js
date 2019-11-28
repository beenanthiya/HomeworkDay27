import React from "react";
//import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  state = {
    name: ["a", "b", "c", "d", "e", "f", "g"]
  };
  render() {
    return (
      <div>
        <h1> Render List </h1>
        <ul>
          {this.state.name.map(x => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <h1> Render List </h1>
//       </div>
//     </div>
//   );
// }

export default App;
