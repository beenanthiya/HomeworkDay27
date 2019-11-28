import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Trello from "./lab2";
import But from "./lab3";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <div class="card">
        <br />
        <Trello
          list1="Subwoofer"
          list2="Seed less"
          list3="Non-porous"
          list4="Wing"
          list5="Bezel"
        />
        <br />
      </div>
      <div>
        <But />
      </div>
    </div>
  );
}

export default App;
