import { Link } from "react-router-dom";

function Nav() {
  const style = {
    textDecoration: "none",
    color: "#eef0eb",
    fontSize: "20px",
  };

  return (
    <nav>
      <ul>
        <Link to="/" style={style}>
          <li>Home</li>
        </Link>
        <Link to="/shop" style={style}>
          <li>Shop</li>
        </Link>
        <Link style={style}>
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
