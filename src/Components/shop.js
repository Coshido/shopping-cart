import React, { useEffect } from "react";
import Item from "./item";

function Shop() {
  const items = [
    { id: 1, name: "Bacon Soap", price: "7.48", img: "/Media/bacon-soap.jpg" },
    {
      id: 2,
      name: "Baguette Pillow",
      price: "29.99",
      img: "/Media/baguette-pillow.jpg",
    },
    {
      id: 3,
      name: "Baguette Slippers",
      price: "16.99",
      img: "/Media/baguette-slippers.jpg",
    },
    {
      id: 4,
      name: "Cheeseburger Telephone",
      price: "15.87",
      img: "/Media/cheeseburger-telephone.jpg",
    },
    {
      id: 5,
      name: "Garden Gnome on a Dog",
      price: "34.99",
      img: "/Media/garden-gnome.jpg",
    },
    {
      id: 6,
      name: "Instant Underpants",
      price: "6.21",
      img: "/Media/instant-underpants.jpg",
    },
    {
      id: 7,
      name: "Lightsaber Chopsticks",
      price: "11.97",
      img: "/Media/lightsaber-chopstick.jpg",
    },
    {
      id: 8,
      name: "Mini Hand Squirrel",
      price: "7.89",
      img: "/Media/mini-hand-squirrel.jpg",
    },
    {
      id: 9,
      name: "Rubber Chicken Purse",
      price: "34.99",
      img: "/Media/rubber-chicken-purse.jpg",
    },
    {
      id: 10,
      name: "Spray-On Blood",
      price: "9.99",
      img: "/Media/spray-blood.jpg",
    },
    {
      id: 11,
      name: "Underarm Scrub",
      price: "16.99",
      img: "/Media/underarm-scrub.jpg",
    },
    {
      id: 12,
      name: "Yodeling Pickle",
      price: "11.99",
      img: "/Media/yodeling-pickle.jpg",
    },
  ];

  const [shopItems, setShopItems] = React.useState([""]);
  const [cart, setCart] = React.useState([]);
  const [cartById, setCartById] = React.useState();

  //componentDidMount
  useEffect(() => {
    items.sort((a, b) => (a.price * 100 > b.price * 100 ? 1 : -1));
    setShopItems(items);
  }, []);

  const addToCart = (id) => {
    setCart([...cart, id]);
  };

  const removeFromCart = (id) => {
    let tempCart = [...cart];
    let index = tempCart.indexOf(id);
    if (index > -1) {
      tempCart.splice(index, 1);
    }
    setCart(tempCart);
  };

  const reduceCartById = (cart) => {
    let reducedCart = cart.reduce((acc, curr) => {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    setCartById(reducedCart);
  };

  //cart componentDidUpdate
  useEffect(() => {
    reduceCartById(cart);
    console.log(cart);
  }, [cart]);

  return (
    <div className="shop-page">
      <div className="item-wrapper">
        {shopItems.map((item) => {
          return (
            <Item
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              addToCart={() => addToCart(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
