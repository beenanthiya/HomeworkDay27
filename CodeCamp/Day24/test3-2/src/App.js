import React from "react";
//import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  state = {
    arr: [
      { name: "Gourge", lastname: "Longman", age: 13 },
      { name: "Zofia", lastname: "Olson", age: 20 },
      { name: "Elif", lastname: "Salt", age: 30 },
      { name: "Kyal", lastname: "Hoga", age: 12 }
    ]
  };
  render() {
    return (
      <div>
        <h1> Render Table </h1>
        <table>
          {this.state.arr.map(x => (
            <tr>
              <td>{x.name}</td>
              <td>{x.lastname}</td>
              <td>{x.age}</td>
            </tr>
          ))}
        </table>
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
