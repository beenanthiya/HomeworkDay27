import React from "react";
import { Layout, Avatar, Col, Row, Divider, Input, Icon, Button } from "antd";

class ChangePass extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ height: "fit-content" }}
          >
            <Col span={4}>
              <Avatar
                size={164}
                src="https://jellystonepa.com/wp-content/uploads/sites/6/2017/05/0-yogi.jpg"
              />
            </Col>
            <Col span={8}>
              <Row type="flex" align="middle" style={{ fontSize: "50px" }}>
                <div>Nanthiya Chantharo</div>
              </Row>
            </Col>
          </Row>
        </div>
        <Divider />
        <div>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ height: "fit-content" }}
          >
            <Col span={7}>
              <Row>
                <Input.Password
                  placeholder="Old Password"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </Row>
              <br />
              <Row>
                <Input.Password
                  placeholder="New Password"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </Row>
              <br />
              <Row>
                <Input.Password
                  placeholder="Confirm New Password"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </Row>
              <br />
              <Row type="flex" justify="center">
                <Button type="primary">Change Password</Button>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default ChangePass;
