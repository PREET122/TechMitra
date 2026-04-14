function ProductCard({ name, price }) {
  return (
    <div className="product">
      <img src="https://via.placeholder.com/150" alt={name} />
      <h3>{name}</h3>
      <p className="price">₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;