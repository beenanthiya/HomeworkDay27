import { Row, Col } from "antd";
import { Input, Icon, Button } from "antd";

import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Row type="flex" justify="center" style={{ height: "100vh" }}>
          <Col span={8}>
            <Row
              type="flex"
              justify="end"
              align="middle"
              style={{ height: "100vh" }}
            >
              <img
                src="https://image.flaticon.com/icons/png/512/124/124010.png"
                style={{ maxWidth: "200px" }}
              />
            </Row>
            <br />
            <br />
          </Col>

          <Col span={8}>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ height: "100%" }}
            >
              <Col>
                <Row>
                  <Input
                    placeholder="Username"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                  />
                </Row>
                <Row>
                  <br />

                  <Input.Password
                    placeholder="Password"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                  />
                </Row>
                <br />

                <Row>
                  <Col span={12}>
                    <Button type="link">Signup</Button>
                  </Col>
                  <Col span={12}>
                    <Button type="primary">Log in</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);
export default Login;
