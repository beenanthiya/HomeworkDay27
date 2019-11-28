import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Popup from "./Popup";
import Trello from "./Trello";

function App() {
  return (
    <div>
      <br />
      <div class="card">
        <br />
        <Popup heading="This Is Important">
          Here is some important text or error or someting.
        </Popup>
        <br />
      </div>
      <br />
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
    </div>
  );
}

export default App;
