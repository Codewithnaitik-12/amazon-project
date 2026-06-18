export default function ProductCard({
  product,
  quantity,
  addToCart,
  removeFromCart
}) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <div className="quantity-box">
        <button
          onClick={() => removeFromCart(product.id)}
        >
          −
        </button>

        <span>{quantity}</span>

        <button
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </div>
    </div>
  );
}