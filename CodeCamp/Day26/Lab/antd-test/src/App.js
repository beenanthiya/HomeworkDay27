import React from "react";
//import { Button } from "antd";
//import { Icon } from "antd";
//import { Transfer, Switch } from "antd";
//import logo from './logo.svg';
import "./App.css";
// import App2 from "./App2";
// import TestAmtd from "./TestAntd";
//import Login from "./Login";
import Signup from "./Signup";
import Login from "./Login";
import ChangePass from "./ChangePass";
import { Layout, Row, Col, Avatar, Icon, Button, Menu } from "antd";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout>
      <Header>
        <Row type="flex" justify="end">
          <Col span={19}>
            <Row type="flex" justify="start">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Row>
          </Col>
          <Col span={3}>
            <div style={{ color: "white" }}>Nanthiya Chantharo</div>
          </Col>
          <Col span={1}>
            <Avatar src="https://jellystonepa.com/wp-content/uploads/sites/6/2017/05/0-yogi.jpg" />
          </Col>
          <Col span={1}>
            <Button type="link">
              <Icon type="caret-down" size="large" style={{ color: "white" }} />
            </Button>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          background: "#fff",
          padding: 24,
          minHeight: 280
        }}
      >
        <div>
          <ChangePass />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
