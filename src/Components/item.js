function Item(props) {
  return (
    <div className="shop-item">
      <img src={props.item.img} className="image" />
      <h3>{props.item.name}</h3>
      <p>{props.item.price}€</p>
      <button className="item-button" onClick={props.addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Item;
