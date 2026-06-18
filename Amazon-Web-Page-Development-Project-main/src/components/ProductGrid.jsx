import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  cart,
  addToCart,
  removeFromCart
}) {
  return (
    <div className="grid">
      {products.map(product => {
        const cartItem = cart.find(
          item => item.id === product.id
        );

        return (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cartItem?.quantity || 0}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
}