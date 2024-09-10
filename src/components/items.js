import React, { Component } from "react";
import Item from "./item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <Item key={el.id} item={el} addedToCart={this.props.addedToCart} />
        ))}
      </main>
    );
  }
}

export default Items;
