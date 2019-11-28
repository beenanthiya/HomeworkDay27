import React from "react";

function Trello(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        class="card"
        style={{ width: "300px", backgroundColor: "lightgray" }}
      >
        <h4>Phone Feature</h4>
        <div class="card-body ">
          <ul class="list-group">
            <li class="list-group-item">{props.list1}</li>
            <li class="list-group-item">{props.list2}</li>
            <li class="list-group-item">{props.list3}</li>
            <li class="list-group-item">{props.list4}</li>
            <li class="list-group-item">{props.list5}</li>
          </ul>
        </div>
        <p> Add a card ....</p>
      </div>
    </div>
  );
}

export default Trello;
