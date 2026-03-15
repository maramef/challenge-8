function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">🛍️ ShopReact</div>
      <div className="nav-cart">
        🛒
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </div>
    </nav>
  )
}

export default Navbar