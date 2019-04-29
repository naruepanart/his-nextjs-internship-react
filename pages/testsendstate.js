import React, { Component } from "react";
import About from "./getstate";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      shop: [
        { id: 35, name: "jumper", color: "red", price: 200 },
        { id: 42, name: "shirt", color: "blue", price: 15 },
        { id: 56, name: "pants", color: "green", price: 25 },
        { id: 71, name: "socks", color: "black", price: 5 },
        { id: 72, name: "socks", color: "white", price: 5 }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.shop.map(item => (
          <About item={item} key={item.id} />
        ))}
      </div>
    );
  }
}
