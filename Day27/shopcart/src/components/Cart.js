import React, { Component } from "react";
import { Table, Button } from "antd";

export default class Cart extends Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "product.name"
      },
      {
        title: "Price",
        dataIndex: "product.price"
      },
      {
        title: "Amount",
        dataIndex: "amount"
      },
      {
        title: "Action",
        dataIndex: "",
        render: (text, cartItem) => (
          <Button
            type="link"
            onClick={() => this.props.handleDeleteProductInCart(cartItem.uid)}
          >
            {" "}
            Delete{" "}
          </Button>
        )
      }
    ];

    return <Table columns={columns} dataSource={this.props.cart} bordered />;
  }
}
