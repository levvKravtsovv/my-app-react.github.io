import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";
import Order from "./order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const ifCartIsEmpty = () => {
  return (
    <div className="empty__cart">
      <p>Cart is empty </p>
      <FaRegSadCry />
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    //whole header
    <header className="header">
      {/* this class helps to make all nav items in one line */}
      <div className=" header__display ">
        {/* basic nav tag with class */}
        <nav className="header__navigation">
          {/* indoor class with nav list (text, logo, cart) */}
          <ul className="header__navigation-list">
            {/* class of every list nav item */}
            <li className="header__navigation-item ">
              {/* class of every nav category (women, men, kids) */}
              <a className="header__navigation-item-category" href="#">
                WOMEN
              </a>
            </li>
            <li className="header__navigation-item">
              <a className="header__navigation-item-category" href="#">
                MEN
              </a>
            </li>
            <li className="header__navigation-item ">
              <a className="header__navigation-item-category" href="#">
                KIDS
              </a>
            </li>
            <li className="header__navigation-item  ">
              {/* store svg logo (unactive) */}
              <a href="#" className="header__logo">
                <img src="/images/logo-img.svg" alt="logo.svg"></img>
              </a>
            </li>
            <li className="header__navigation-item">
              {/* cart (unactive for now), maybe will change from link to btn */}
              <FaShoppingCart
                onClick={() => setCartOpen((cartOpen = !cartOpen))}
                className={`header__cart ${cartOpen && "active"}`}
              />

              {cartOpen && (
                <div className="cart__open">
                  {props.orders.length > 0
                    ? showOrders(props)
                    : ifCartIsEmpty()}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
