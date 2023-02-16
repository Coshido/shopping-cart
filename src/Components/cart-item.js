function CartItem(props) {
  console.log(props.item, "lelele");
  return (
    <div className="cart-item">
      <img src={props.item.img} className="cart-image" />
      <h3>{props.item.name}</h3>
      <p>{props.item.price}€</p>
      <div className="cart-quantity">
        <button>-</button>
        <p>{props.item.count}</p>
        <button>+</button>
      </div>
    </div>
  );
}

export default CartItem;
