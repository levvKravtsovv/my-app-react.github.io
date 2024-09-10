// file where i will combine all components of this app (at least for now)

import React from "react";
import Header from "./components/header"; // import header.js
import Items from "./components/items"; // imort items.js
import Footer from "./components/footer"; // import footer.js

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Black Jamper",
          img: "jamper.jpg",
          description: "This is a black jamper",
          category: "Jampers",
          price: "29.99",
          item_to_cart: "item_to_cart.png",
        },
        {
          id: 2,
          title: "Light Switshot",
          img: "switshot.jpg",
          desc: "This is a light switshot",
          category: "Switshots",
          price: "24.99",
          item_to_cart: "item_to_cart.png",
        },
        {
          id: 3,
          title: "Grey Robe",
          img: "robe.jpg",
          desc: "This is a grey robe",
          category: "Robes",
          price: "19.00",
          item_to_cart: "item_to_cart.png",
        },
        {
          id: 4,
          title: "Shopping Bag",
          img: "bag.jpg",
          desc: "This is a shopping bag",
          category: "Bags",
          price: "14.99",
          item_to_cart: "item_to_cart.png",
        },
        {
          id: 5,
          title: "Black Jamper",
          img: "jamper.jpg",
          desc: "this is a black jamper",
          category: "Jampers",
          price: "29.99",
          item_to_cart: "item_to_cart.png",
        },
        {
          id: 6,
          title: "Grey Robe",
          img: "robe.jpg",
          desc: "This is a grey robe",
          category: "Robes",
          price: "19.00",
          item_to_cart: "item_to_cart.png",
        },
      ],
    };
    this.addToCart = this.addToCart.bind(this);
  }
  render() {
    return (
      // block (class) which combine all parts of the page
      <div className="store__wrapper">
        <Header orders={this.state.orders} />

        <h2 className="category__title">Women</h2>

        <Items items={this.state.items} addedToCart={this.addToCart} />

        <Footer />
      </div>
    );
  }

  addToCart(item) {
    this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
