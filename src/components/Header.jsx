import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">📚 E-Learning</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">🛒 Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
