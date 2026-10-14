import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="site-footer" id="why-foodie">
      <div className="footer-main">
        <div className="footer-brand-col">
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">
              f<span>!</span>
            </span>
            <span className="brand-name">
              foodie<span>.</span>
            </span>
          </Link>
          <p>
            Good food, good mood. Bringing your favourite flavours to your
            doorstep, one delicious bite at a time.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter size={17} />
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/menu">Our menu</Link>
          <Link to="/menu?category=pizza">Pizza</Link>
          <Link to="/menu?category=burger">Burgers</Link>
          <Link to="/menu?category=dessert">Desserts</Link>
        </div>
        <div>
          <h4>Help</h4>
          <a href="mailto:hello@foodie.example">Contact us</a>
          <a href="mailto:support@foodie.example">Support</a>
          <Link to="/cart">Your cart</Link>
          <Link to="/login">My account</Link>
        </div>
        <div className="footer-newsletter">
          <h4>Get the good stuff</h4>
          <p>New menu drops and tasty offers, straight to your inbox.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thanks for subscribing! This demo does not send emails yet.",
              );
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button aria-label="Subscribe">
              <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Foodie. Made with a little extra love.
        </span>
        <span>Portfolio demo · Made for good food days</span>
      </div>
    </footer>
  );
}
