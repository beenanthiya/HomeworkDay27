import { Row, Col } from "antd";
import { Input, Icon, Button } from "antd";

import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "100vh" }}
        >
          <Col span={7}>
            <Row type="flex" justify="center">
              <img
                src="https://image.flaticon.com/icons/png/512/124/124010.png"
                style={{ maxWidth: "150px" }}
              />
            </Row>
            <br />
            <Row>
              <Input
                placeholder="Name"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            </Row>
            <br />
            <Row>
              <Input
                placeholder="E-mail"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            </Row>
            <br />
            <Row>
              <Input.Password
                placeholder="Password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            </Row>
            <br />
            <Row>
              <Input.Password
                placeholder="Confirm Password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            </Row>

            <br />
            <Row type="flex" justify="center">
              <Button type="primary">Signup</Button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);
export default Signup;
