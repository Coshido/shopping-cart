import React from "react";
import Item from "./item";

function Shop(props) {
  return (
    <div className="shop-page">
      <div className="item-wrapper">
        {props.shopItems.map((item) => {
          return <Item item={item} addToCart={() => props.addToCart(item)} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
