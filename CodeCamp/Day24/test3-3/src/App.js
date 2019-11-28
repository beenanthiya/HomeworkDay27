import React from "react";
//import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  state = {
    arr: [
      {
        firstName: "Gourge",
        lastName: "Longman",
        text: "Some text 1",
        image:
          "https://image.freepik.com/free-photo/white-horses-camargue-france_119101-9.jpg"
      },
      {
        firstName: "Zofia",
        lastName: "Olson",
        text: "Some text 2",
        image:
          "https://image.freepik.com/free-photo/tiger-looking-straight-ahead_1286-73.jpg?1"
      },
      {
        firstName: "Elif",
        lastName: "Salt",
        text: "Some text 3",
        image:
          "https://image.freepik.com/free-photo/3d-landscape-with-herd-elephants_1048-7804.jpg"
      },
      {
        firstName: "Kyal",
        lastName: "Hogan",
        text: "Some text 4",
        image:
          "https://image.freepik.com/free-photo/cute-pug-with-santa-hat-gift-laying_23-2148348108.jpg"
      }
    ]
  };
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div class="row">
          <div class="col">
            <h1> Render Posts </h1>
            {this.state.arr.map(x => (
              <div class="card m-3" style={{ width: "600px" }}>
                <img src={x.image} class="card-img-top" alt="" />
                <div class="card-body">
                  <p>
                    {x.firstName} {x.lastName}
                  </p>
                  <p>{x.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
