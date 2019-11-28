import { Button } from "antd";
import React from "react";

class App2 extends React.Component {
  state = {
    size: "large"
  };

  handleSizeChange = e => {
    this.setState({
      size: e.target.value
    });
  };
  render() {
    const { size } = this.state;
    return (
      <div>
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
      </div>
    );
  }
}

export default App2;
