import React from "react";

function Popup(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class="card" style={{ width: "600px" }}>
        <div class="card-header" style={{ backgroundColor: "white" }}>
          <div style={{ fontWeight: "bold" }}>{props.heading}</div>
        </div>
        <div class="card-body">
          <div>{props.children}</div>
        </div>
        <div
          class="card-footer text-right"
          style={{ backgroundColor: "white" }}
        >
          <div>
            <button type="button" class="btn btn-outline-dark">
              <b>Close</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
