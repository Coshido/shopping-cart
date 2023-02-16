function Item(props) {
  return (
    <div className="shop-item">
      <img src={props.img} className="image" />
      <h3>{props.name}</h3>
      <p>{props.price}€</p>
      <button className="item-button" onClick={props.addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Item;
