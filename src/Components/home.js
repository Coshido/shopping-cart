import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <p>The weirdest store online!</p>
      <Link to="/shop">
        <button className="home-button">Shop now!</button>
      </Link>
    </div>
  );
}

export default Home;
