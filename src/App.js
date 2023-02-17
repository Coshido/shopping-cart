import Home from "./Components/home";
import Nav from "./Components/nav";
import Shop from "./Components/shop";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Cart from "./Components/cart";

function App() {
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

  const [cart, setCart] = React.useState([]);
  const [orderedCart, setOrderedCart] = React.useState();
  const [shopItems, setShopItems] = React.useState([""]);
  const [cartSize, setCartSize] = React.useState(0);
  const [isCartShown, setIsCartShown] = React.useState(false);

  const switchCartDisplay = (event) => {
    let cartWrapper = document.querySelector(".cart-wrapper");
    if (isCartShown) {
      cartWrapper.style.zIndex = "1";
    } else {
      cartWrapper.style.zIndex = "-1";
    }
    setIsCartShown(!isCartShown);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    let tempCart = [...cart];
    let index = tempCart.indexOf(item);
    if (index > -1) {
      tempCart.splice(index, 1);
    }
    setCart(tempCart);
  };

  const orderCart = (cart) => {
    let reducedCart = cart.reduce((acc, curr) => {
      if (curr.id in acc) {
        acc[curr.id].count += 1;
      } else {
        acc[curr.id] = {
          name: curr.name,
          price: curr.price,
          img: curr.img,
          count: 1,
        };
      }
      return acc;
    }, {});
    setOrderedCart(reducedCart);
  };

  //componentDidMount
  useEffect(() => {
    items.sort((a, b) => (a.price * 100 > b.price * 100 ? 1 : -1));
    setShopItems(items);
  }, []);

  //cart componentDidUpdate
  useEffect(() => {
    orderCart(cart);
    setCartSize(Object.keys(cart).length);
    console.log(orderedCart);

    //console.log(cart);
    //console.log(orderedCart);
  }, [cart]);

  return (
    <div className="wrapper">
      <Nav switchCartDisplay={switchCartDisplay} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/shop"
          element={<Shop shopItems={shopItems} addToCart={addToCart} />}
        />
      </Routes>
      <Cart
        cart={orderedCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartSize={cartSize}
        switchCartDisplay={switchCartDisplay}
      />
    </div>
  );
}

export default App;
