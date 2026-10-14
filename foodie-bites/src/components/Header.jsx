import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, MapPin, UserRound } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
export default function Header({ onSearch }) {
  const { cartCount, user, logout } = useApp();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    onSearch(query);
    navigate("/menu");
    setSearchOpen(false);
    setOpen(false);
  };
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">
            f<span>!</span>
          </span>
          <span className="brand-name">
            foodie<span>.</span>
          </span>
        </Link>
        <div className="delivery-location">
          <MapPin size={17} />
          <span>
            <small>Delivering to</small>
            <strong>Shahada, Maharashtra⌄</strong>
          </span>
        </div>
        <nav className={`main-nav ${open ? "nav-open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/menu" onClick={() => setOpen(false)}>
            Explore menu
          </NavLink>
          <a href="/#why-foodie" onClick={() => setOpen(false)}>
            About us
          </a>
          {user ? (
            <button
              className="nav-logout"
              onClick={() => {
                logout();
                setOpen(false);
              }}
            >
              Sign out
            </button>
          ) : (
            <NavLink to="/login" onClick={() => setOpen(false)}>
              Sign in
            </NavLink>
          )}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={19} />
          </button>
          <Link to="/cart" className="cart-button">
            <ShoppingBag size={18} />
            <span>Cart</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </Link>
          {user && (
            <Link to="/profile" className="user-avatar">
              <UserRound size={17} />
            </Link>
          )}
          <button
            className="icon-button mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {searchOpen && (
        <form className="header-search" onSubmit={submit}>
          <Search size={18} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pizza, burgers, desserts..."
          />
          <button className="btn btn-primary btn-small">Search</button>
        </form>
      )}
    </header>
  );
}
