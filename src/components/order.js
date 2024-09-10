import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img id="image" src={"./images/" + this.props.item.img} />
        <p id="title">{this.props.item.title}</p>
        <p id="price">${this.props.item.price}</p>
      </div>
    );
  }
}

export default Order;
