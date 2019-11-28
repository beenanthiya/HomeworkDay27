import React from "react";

class But extends React.Component {
  handleClick = e => {
    // alert("button was clicked");
    console.log(e.key);
  };
  render() {
    return <input onKeyUp={this.handleClick}></input>;
  }
}

export default But;
