import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">E-Commerce</h2>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/shop" onClick={closeMenu}>
            Shop
          </Link>
        </li>

        <li>
          <Link to="/cart" onClick={closeMenu}>
            🛒 {cart.reduce((total, item) => total + item.quantity, 0)}
          </Link>
        </li>

        <li>
          {isLoggedIn ? (
            <button
              className="logout-btn"
              onClick={() => {
                logout();
                closeMenu();
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
          )}
        </li>

        <li>
          <Link to="/checkout" onClick={closeMenu}>
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
