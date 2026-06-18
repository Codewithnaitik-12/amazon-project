export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">
        amazon<span className="smile">⌣</span>
      </div>

      <input
        type="text"
        placeholder="Search Amazon"
        className="search"
      />

      <div className="cart">
        🛒 Cart ({cartCount})
      </div>
    </header>
  );
}