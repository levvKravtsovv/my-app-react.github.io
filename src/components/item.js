import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img id="image" src={"./images/" + this.props.item.img} />
        <p id="title">{this.props.item.title}</p>
        <p id="price">${this.props.item.price}</p>
        <btn
          id="item_to_cart"
          onClick={() => this.props.addedToCart(this.props.item)}>
          <img src={"./images/" + this.props.item.item_to_cart} />
        </btn>
      </div>
    );
  }
}

export default Item;
