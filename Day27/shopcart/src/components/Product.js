import React, { Component } from "react";
import { Card, Row, Button, Col } from "antd";
import Text from "antd/lib/typography/Text";

export default class Product extends Component {
  render() {
    const product = this.props.productDetail;
    return (
      <Card hoverable cover={<img src={product.image} alt="" />}>
        <h4 style={{ height: "80px" }}>{product.name}</h4>
        <p style={{ height: "250px", overflowY: "scroll" }}>
          {product.description}
        </p>
        <Row>
          <Col>
            <Row type="flex" justify="center" align="middle">
              <Col span={12}>
                <Text strong>{product.price} Baht</Text>
              </Col>
              <Col span={10}>
                <Row type="flex" justify="end">
                  <Button
                    type="primary"
                    shape="circle"
                    icon="shopping-cart"
                    size="large"
                    onClick={() => this.props.handleClickAddToCart(product)}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    );
  }
}
