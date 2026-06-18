import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);

    if (item.quantity === 1) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(
        cart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  }

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header cartCount={totalItems} />

      <Hero />

      <ProductGrid
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      <div className="cart-section">
        <h2>Cart Items ({totalItems})</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>
                  {item.title} × {item.quantity}
                </span>

                <span>
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}

            <h3 className="total">
              Total: ₹{totalPrice}
            </h3>
          </>
        )}
      </div>
      <footer className="credits">
        Made with React • Designed & Developed by Naitik
      </footer>
    </>
  );
}

export default App;
