import { useMemo, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bike,
  ChefHat,
  ChevronRight,
  CircleCheck,
  Clock3,
  CreditCard,
  Leaf,
  LockKeyhole,
  Mail,
  MapPin,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Trash2,
  Truck,
  UserRound,
  WalletCards,
} from "lucide-react";
import { foods, categories } from "./data/foods.js";
import { useApp } from "./context/AppContext.jsx";
import Header from "./components/Header.jsx";
import FoodCard from "./components/FoodCard.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <ScrollToTop />
      <Header onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage searchTerm={searchTerm} />} />
        <Route path="/food/:id" element={<FoodDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const [active, setActive] = useState("all");
  const shown =
    active === "all"
      ? foods.slice(0, 4)
      : foods.filter((f) => f.category === active).slice(0, 4);
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <div className="eyebrow">
            <span>✦</span> GOOD FOOD. GOOD MOOD.
          </div>
          <h1>
            Your cravings,
            <br />
            our <span>command.</span>
          </h1>
          <p className="hero-copy">
            Freshly made favourites, delivered to your door. Good days start
            with really, really good food.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate("/menu")}
            >
              Explore menu <ArrowRight size={18} />
            </button>
            <div className="hero-rating">
              <div className="avatar-stack">
                <span>👩🏻</span>
                <span>👨🏽</span>
                <span>👩🏾</span>
              </div>
              <div>
                <div className="rating-stars">★★★★★</div>
                <small>
                  <strong>4.9/5</strong> from 2k+ foodies
                </small>
              </div>
            </div>
          </div>
          <div className="hero-perks">
            <span>
              <CircleCheck size={16} /> Fresh ingredients
            </span>
            <span>
              <CircleCheck size={16} /> Fast delivery
            </span>
            <span>
              <CircleCheck size={16} /> Made with love
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=90"
              alt="Fresh pizza topped with basil"
            />
            <div className="photo-badge">
              <span>🔥</span>
              <div>
                <strong>Fresh out the oven</strong>
                <small>Made just for you</small>
              </div>
            </div>
          </div>
          <div className="floating-note note-top">
            <span className="note-icon">🥑</span>
            <div>
              <strong>Fresh & tasty</strong>
              <small>Every single day</small>
            </div>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-icon note-delivery">
              <Bike size={20} />
            </span>
            <div>
              <strong>Quick delivery</strong>
              <small>At your doorstep</small>
            </div>
          </div>
          <div className="hero-doodle">✳</div>
        </div>
        <div className="hero-bottom-wave" />
      </section>
      <section className="trust-strip container">
        <div>
          <span className="trust-icon orange">
            <ChefHat size={22} />
          </span>
          <span>
            <strong>Chef-crafted</strong>
            <small>Made fresh to order</small>
          </span>
        </div>
        <div>
          <span className="trust-icon green">
            <Leaf size={22} />
          </span>
          <span>
            <strong>Quality ingredients</strong>
            <small>Goodness in every bite</small>
          </span>
        </div>
        <div>
          <span className="trust-icon purple">
            <Truck size={22} />
          </span>
          <span>
            <strong>Fast delivery</strong>
            <small>At your door, on time</small>
          </span>
        </div>
        <div>
          <span className="trust-icon yellow">
            <BadgeCheck size={22} />
          </span>
          <span>
            <strong>Made with care</strong>
            <small>Your happiness matters</small>
          </span>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              WHAT ARE YOU IN THE MOOD FOR?
            </span>
            <h2>
              Find your <span>flavour.</span>
            </h2>
          </div>
          <Link to="/menu" className="text-link">
            View all menu <ArrowRight size={16} />
          </Link>
        </div>
        <div className="category-grid">
          {categories
            .filter((c) => c.id !== "all")
            .map((c, i) => (
              <button
                key={c.id}
                className={`category-tile category-${i}`}
                onClick={() => navigate(`/menu?category=${c.id}`)}
              >
                <span className="category-emoji">{c.emoji}</span>
                <strong>{c.name}</strong>
                <small>
                  {foods.filter((f) => f.category === c.id).length} delicious
                  options
                </small>
                <span className="category-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            ))}
        </div>
      </section>
      <section className="section popular-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">THE CROWD FAVOURITES</span>
              <h2>
                Most-loved <span>plates.</span>
              </h2>
              <p className="section-subtitle">
                The dishes everyone keeps coming back for.
              </p>
            </div>
            <Link to="/menu" className="text-link">
              Explore all dishes <ArrowRight size={16} />
            </Link>
          </div>
          <div className="category-pills">
            {categories.slice(0, 5).map((c) => (
              <button
                key={c.id}
                className={active === c.id ? "active" : ""}
                onClick={() => setActive(c.id)}
              >
                {c.emoji} {c.name}
              </button>
            ))}
          </div>
          <div className="food-grid">
            {shown.length ? (
              shown.map((f) => <FoodCard key={f.id} food={f} />)
            ) : (
              <p>
                No dishes in this category yet.{" "}
                <button onClick={() => setActive("all")}>Show all</button>
              </p>
            )}
          </div>
          <div className="center-action">
            <Link to="/menu" className="btn btn-outline">
              See the full menu <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="promo-section container">
        <div className="promo-copy">
          <span className="promo-tag">A LITTLE TREAT FOR YOU</span>
          <h2>
            Good food is
            <br />
            always a <span>good idea.</span>
          </h2>
          <p>
            Big cravings deserve big flavours. Your next favourite meal is just
            a few clicks away.
          </p>
          <button
            className="btn btn-dark btn-large"
            onClick={() => navigate("/menu")}
          >
            Order something lovely <ArrowRight size={18} />
          </button>
          <div className="promo-footnote">
            <ShieldCheck size={15} /> Freshly prepared. Carefully delivered.
          </div>
        </div>
        <div className="promo-art">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
            alt="Colourful fresh meal bowl"
          />
          <div className="promo-sticker">
            <span>100%</span>
            <small>
              made with
              <br />
              love
            </small>
          </div>
          <span className="promo-spark">✳</span>
        </div>
      </section>
      <section className="section container testimonials-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">KIND WORDS, FULL TUMMIES</span>
            <h2>
              Love at first <span>bite.</span>
            </h2>
          </div>
          <div className="testimonial-count">
            <strong>4.9</strong>
            <span>
              ★★★★★<small>Average customer rating</small>
            </span>
          </div>
        </div>
        <div className="testimonial-grid">
          <Testimonial
            initials="AK"
            name="Aarav K."
            location="Mumbai"
            quote="The food arrived hot, fresh, and honestly better than I expected. The app was super easy to use too."
            color="peach"
          />
          <Testimonial
            initials="SM"
            name="Sana M."
            location="Pune"
            quote="Finally, a place that gets the little things right. Great portions, lovely packaging, and quick delivery."
            color="mint"
          />
          <Testimonial
            initials="RV"
            name="Riya V."
            location="Nashik"
            quote="The Rainbow Bowl is my new obsession. Fresh ingredients and flavours that make me excited to eat healthy."
            color="lavender"
          />
        </div>
      </section>
      <section className="app-cta container">
        <div className="cta-icon">🍜</div>
        <div>
          <span className="section-kicker">YOUR NEXT MEAL IS WAITING</span>
          <h2>Hungry? Let's fix that.</h2>
          <p>Explore the menu and find your new favourite.</p>
        </div>
        <button
          className="btn btn-primary btn-large"
          onClick={() => navigate("/menu")}
        >
          Order now <ArrowRight size={18} />
        </button>
        <span className="cta-decoration">✳</span>
      </section>
    </main>
  );
}

function Testimonial({ initials, name, location, quote, color }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-top">
        <span className={`testimonial-avatar ${color}`}>{initials}</span>
        <div>
          <strong>{name}</strong>
          <small>{location}, India</small>
        </div>
        <span className="testimonial-stars">★★★★★</span>
      </div>
      <p>“{quote}”</p>
      <div className="verified-review">
        <BadgeCheck size={14} /> Verified foodie
      </div>
    </article>
  );
}

function MenuPage({ searchTerm }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [category, setCategory] = useState(params.get("category") || "all");
  const [sort, setSort] = useState("recommended");
  const [search, setSearch] = useState(searchTerm || "");
  const [vegOnly, setVegOnly] = useState(false);
  const filtered = useMemo(() => {
    let list = foods.filter(
      (f) =>
        (category === "all" || f.category === category) &&
        (!vegOnly || f.veg) &&
        `${f.name} ${f.description} ${f.category}`
          .toLowerCase()
          .includes(search.toLowerCase()),
    );
    if (sort === "price-low")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-high")
      list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, search, sort, vegOnly]);
  return (
    <main className="menu-page">
      <div className="menu-hero">
        <div className="container menu-hero-inner">
          <div>
            <span className="section-kicker">MADE FRESH, JUST FOR YOU</span>
            <h1>
              There's something
              <br />
              for <span>every craving.</span>
            </h1>
            <p>
              From comfort-food classics to fresh new favourites — let's find
              your next bite.
            </p>
            <div className="menu-hero-meta">
              <span>
                <Clock3 size={15} /> 15–30 min delivery
              </span>
              <span>
                <Star size={15} fill="currentColor" /> 4.9 customer rating
              </span>
            </div>
          </div>
          <div className="menu-hero-image">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=850&q=85"
              alt="Fresh pizza"
            />
            <span className="menu-image-label">Made with love ♡</span>
          </div>
        </div>
      </div>
      <div className="container menu-content">
        <div className="menu-toolbar">
          <div>
            <h2>Explore the menu</h2>
            <p>{filtered.length} tasty things to choose from</p>
          </div>
          <div className="menu-controls">
            <label className="menu-search">
              <Search size={17} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Find a dish..."
              />
            </label>
            <label className="sort-select">
              <span>Sort by</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="recommended">Recommended</option>
                <option value="rating">Top rated</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="menu-layout">
          <aside className="menu-sidebar">
            <h3>Categories</h3>
            {categories.map((c) => (
              <button
                key={c.id}
                className={`sidebar-category ${category === c.id ? "active" : ""}`}
                onClick={() => setCategory(c.id)}
              >
                <span>{c.emoji}</span>
                {c.name}
                <small>
                  {c.id === "all"
                    ? foods.length
                    : foods.filter((f) => f.category === c.id).length}
                </small>
              </button>
            ))}
            <div className="sidebar-divider" />
            <h3>Dietary</h3>
            <label className="veg-filter">
              <span className="veg-dot veg">
                <i />
              </span>{" "}
              Vegetarian only
              <input
                type="checkbox"
                checked={vegOnly}
                onChange={(e) => setVegOnly(e.target.checked)}
              />
              <span className="custom-check" />
            </label>
            <div className="sidebar-help">
              <span>💛</span>
              <strong>Need a little help?</strong>
              <p>We’re happy to help you find your new favourite.</p>
              <a href="mailto:hello@foodie.example">
                Talk to us <ArrowRight size={13} />
              </a>
            </div>
          </aside>
          <div className="menu-results">
            {filtered.length ? (
              <div className="food-grid">
                {filtered.map((f) => (
                  <FoodCard key={f.id} food={f} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span>🍽️</span>
                <h3>No dishes found</h3>
                <p>Try another search or choose a different category.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearch("");
                    setCategory("all");
                    setVegOnly(false);
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function FoodDetailsPage() {
  const { id } = useParams();
  const food = foods.find((f) => f.id === Number(id));
  const { addToCart } = useApp();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  if (!food) return <NotFoundPage />;
  return (
    <main className="container details-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <Link to="/menu">Menu</Link>
        <ChevronRight size={14} />
        <span>{food.name}</span>
      </div>
      <div className="details-layout">
        <div className="details-image">
          <img src={food.image} alt={food.name} />
          <span
            className={`veg-dot details-veg ${food.veg ? "veg" : "non-veg"}`}
          >
            <i />
          </span>
        </div>
        <div className="details-info">
          <span className="section-kicker">
            {food.tag || "MADE FRESH TO ORDER"}
          </span>
          <h1>{food.name}</h1>
          <div className="details-rating">
            <span>
              <Star size={16} fill="currentColor" /> {food.rating}
            </span>
            <span>{food.reviews} reviews</span>
            <span>·</span>
            <span>
              <Clock3 size={15} /> {food.time}
            </span>
          </div>
          <p className="details-description">{food.description}</p>
          <div className="details-price">
            ₹{food.price}
            <small> / serving</small>
          </div>
          <div className="ingredient-box">
            <h3>What makes it lovely</h3>
            <div className="ingredient-list">
              {food.ingredients.map((i) => (
                <span key={i}>
                  <CircleCheck size={15} />
                  {i}
                </span>
              ))}
            </div>
          </div>
          <div className="quantity-row">
            <span>Quantity</span>
            <div className="quantity-control">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                aria-label="Decrease"
              >
                <Minus size={15} />
              </button>
              <strong>{qty}</strong>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase">
                <Plus size={15} />
              </button>
            </div>
          </div>
          <button
            className="btn btn-primary btn-large details-add"
            onClick={() => {
              addToCart(food, qty);
              navigate("/cart");
            }}
          >
            Add to cart · ₹{food.price * qty}
            <ShoppingBag size={18} />
          </button>
          <div className="details-promise">
            <span>
              <ShieldCheck size={16} /> Safe demo checkout
            </span>
            <span>
              <Truck size={16} /> Fresh delivery
            </span>
          </div>
        </div>
      </div>
      <section className="section related-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">MORE TO LOVE</span>
            <h2>
              You might also <span>like.</span>
            </h2>
          </div>
          <Link to="/menu" className="text-link">
            Full menu <ArrowRight size={16} />
          </Link>
        </div>
        <div className="food-grid">
          {foods
            .filter((f) => f.id !== food.id)
            .slice(0, 4)
            .map((f) => (
              <FoodCard key={f.id} food={f} />
            ))}
        </div>
      </section>
    </main>
  );
}

function CartPage() {
  const { cart, subtotal, updateQuantity, removeFromCart } = useApp();
  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 35;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;
  return (
    <main className="container cart-page">
      <div className="page-title-row">
        <div>
          <span className="section-kicker">YOUR LITTLE FOOD HAUL</span>
          <h1>
            Your <span>cart.</span>
          </h1>
          <p>You're one step closer to something delicious.</p>
        </div>
        <Link to="/menu" className="text-link">
          ← Keep exploring
        </Link>
      </div>
      {!cart.length ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <ShoppingBag size={35} />
          </div>
          <h2>Your cart is looking a little hungry.</h2>
          <p>Let's find something delicious to fill it with.</p>
          <Link to="/menu" className="btn btn-primary btn-large">
            Explore the menu <ArrowRight size={17} />
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-panel">
            <div className="cart-panel-heading">
              <h2>
                Your items{" "}
                <span>{cart.reduce((s, i) => s + i.quantity, 0)}</span>
              </h2>
              <span>Price</span>
            </div>
            {cart.map((i) => (
              <article className="cart-item" key={i.id}>
                <Link to={`/food/${i.id}`} className="cart-item-image">
                  <img src={i.image} alt={i.name} />
                </Link>
                <div className="cart-item-info">
                  <Link to={`/food/${i.id}`}>
                    <h3>{i.name}</h3>
                  </Link>
                  <p>
                    {i.time} · {i.veg ? "Vegetarian" : "Non-vegetarian"}
                  </p>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(i.id)}
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                  <div className="quantity-control cart-quantity">
                    <button
                      onClick={() => updateQuantity(i.id, i.quantity - 1)}
                      aria-label="Decrease"
                    >
                      <Minus size={14} />
                    </button>
                    <strong>{i.quantity}</strong>
                    <button
                      onClick={() => updateQuantity(i.id, i.quantity + 1)}
                      aria-label="Increase"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <strong className="cart-item-price">
                  ₹{i.price * i.quantity}
                </strong>
              </article>
            ))}
            <div className="delivery-progress">
              <span>🚚</span>
              <div>
                <strong>
                  {subtotal >= 499
                    ? "You unlocked free delivery!"
                    : `Add ₹${499 - subtotal} more for free delivery`}
                </strong>
                <div className="progress-track">
                  <span
                    style={{
                      width: `${Math.min(100, (subtotal / 499) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="order-summary">
            <h2>Order summary</h2>
            <p className="summary-subtitle">The delicious details</p>
            <SummaryLines subtotal={subtotal} delivery={delivery} tax={tax} />
            <div className="summary-total">
              <span>Total</span>
              <strong>₹{total}</strong>
            </div>
            <p className="tax-note">
              Inclusive of applicable taxes. Final amount shown before checkout.
            </p>
            <Link
              to="/checkout"
              className="btn btn-primary btn-large checkout-button"
            >
              Continue to checkout <ArrowRight size={18} />
            </Link>
            <div className="secure-note">
              <LockKeyhole size={14} /> Secure demo checkout
            </div>
            <div className="payment-logos">
              <span>UPI</span>
              <span>VISA</span>
              <span>MC</span>
              <span>•••</span>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

function SummaryLines({ subtotal, delivery, tax }) {
  return (
    <div className="summary-lines">
      <div>
        <span>Subtotal</span>
        <strong>₹{subtotal}</strong>
      </div>
      <div>
        <span>Delivery fee</span>
        <strong className={delivery === 0 ? "free-delivery" : ""}>
          {delivery === 0 ? "FREE" : `₹${delivery}`}
        </strong>
      </div>
      <div>
        <span>Taxes (5%)</span>
        <strong>₹{tax}</strong>
      </div>
    </div>
  );
}

function CheckoutPage() {
  const { cart, subtotal, clearCart, user } = useApp();
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [placed, setPlaced] = useState(false);
  const [orderNo] = useState(
    () => `FD${Math.floor(100000 + Math.random() * 900000)}`,
  );
  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 35;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!cart.length) return;
    setPlaced(true);
    clearCart();
  };
  if (placed)
    return (
      <main className="container checkout-page">
        <div className="success-card">
          <div className="success-icon">
            <CircleCheck size={42} />
          </div>
          <span className="section-kicker">ORDER CONFIRMED</span>
          <h1>
            You're in for a <span>treat!</span>
          </h1>
          <p>
            Your demo order <strong>#{orderNo}</strong> has been placed
            successfully.
          </p>
          <div className="success-status">
            <span>
              <PackageCheck size={20} />
            </span>
            <div>
              <strong>We're preparing your order</strong>
              <small>Estimated delivery: 25–35 minutes</small>
            </div>
          </div>
          <p className="demo-note">
            This is a portfolio demo. No real payment was collected and no order
            was sent to a restaurant.
          </p>
          <Link to="/menu" className="btn btn-primary btn-large">
            Order something else <ArrowRight size={17} />
          </Link>
        </div>
      </main>
    );
  if (!cart.length)
    return (
      <main className="container checkout-page">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some delicious food before checkout.</p>
          <Link to="/menu" className="btn btn-primary">
            Explore menu
          </Link>
        </div>
      </main>
    );
  return (
    <main className="container checkout-page">
      <div className="page-title-row">
        <div>
          <span className="section-kicker">ALMOST THERE</span>
          <h1>
            Let's get it <span>to you.</span>
          </h1>
          <p>Delivery details and payment preference.</p>
        </div>
        <div className="checkout-steps">
          <span className="step-done">1. Cart</span>
          <i />
          <span className="step-active">2. Checkout</span>
          <i />
          <span>3. Confirmation</span>
        </div>
      </div>
      <form className="checkout-layout" onSubmit={submit}>
        <div className="checkout-form-column">
          <section className="checkout-card">
            <div className="checkout-card-title">
              <span>01</span>
              <div>
                <h2>Delivery details</h2>
                <p>Where should we bring the good stuff?</p>
              </div>
            </div>
            <div className="form-grid">
              <label className="form-field">
                <span>Full name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={change}
                  required
                  placeholder="Your name"
                />
              </label>
              <label className="form-field">
                <span>Phone number</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  placeholder="10-digit mobile number"
                />
              </label>
              <label className="form-field field-full">
                <span>Delivery address</span>
                <input
                  name="address"
                  value={form.address}
                  onChange={change}
                  required
                  placeholder="Flat / house no., street, area"
                />
              </label>
              <label className="form-field">
                <span>City</span>
                <input
                  name="city"
                  value={form.city}
                  onChange={change}
                  required
                  placeholder="City"
                />
              </label>
              <label className="form-field">
                <span>PIN code</span>
                <input
                  name="pincode"
                  value={form.pincode}
                  onChange={change}
                  required
                  pattern="[0-9]{6}"
                  maxLength="6"
                  placeholder="6-digit PIN code"
                />
              </label>
            </div>
          </section>
          <section className="checkout-card">
            <div className="checkout-card-title">
              <span>02</span>
              <div>
                <h2>Payment method</h2>
                <p>Choose how you'd like to pay.</p>
              </div>
            </div>
            <div className="payment-options">
              {[
                [
                  "upi",
                  "UPI",
                  "GPay, PhonePe, Paytm (demo)",
                  <WalletCards size={21} />,
                ],
                [
                  "card",
                  "Credit / Debit card",
                  "Visa, Mastercard, RuPay (demo)",
                  <CreditCard size={21} />,
                ],
                ["cash", "Cash on delivery", "Pay when your food arrives", "₹"],
              ].map(([value, title, subtitle, icon]) => (
                <label
                  key={value}
                  className={`payment-option ${method === value ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={value}
                    checked={method === value}
                    onChange={(e) => setMethod(e.target.value)}
                  />
                  <span
                    className={`payment-option-icon ${value === "upi" ? "upi-icon" : ""} ${value === "cash" ? "cash-icon" : ""}`}
                  >
                    {icon}
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{subtitle}</small>
                  </span>
                  <span className="radio-visual" />
                </label>
              ))}
            </div>
            <div className="demo-payment-notice">
              <ShieldCheck size={16} />
              <span>
                Demo checkout only. Never enter real card details; no payment
                gateway is connected.
              </span>
            </div>
          </section>
        </div>
        <aside className="order-summary checkout-summary">
          <h2>Your order</h2>
          <div className="checkout-mini-items">
            {cart.map((i) => (
              <div className="checkout-mini-item" key={i.id}>
                <img src={i.image} alt="" />
                <span>
                  <strong>{i.name}</strong>
                  <small>Qty {i.quantity}</small>
                </span>
                <b>₹{i.price * i.quantity}</b>
              </div>
            ))}
          </div>
          <SummaryLines subtotal={subtotal} delivery={delivery} tax={tax} />
          <div className="summary-total">
            <span>Total to pay</span>
            <strong>₹{total}</strong>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-large checkout-button"
          >
            Place demo order <ArrowRight size={18} />
          </button>
          <div className="secure-note">
            <LockKeyhole size={14} /> No real payment is processed
          </div>
        </aside>
      </form>
    </main>
  );
}

function AuthPage({ mode }) {
  const register = mode === "register";
  const navigate = useNavigate();
  const { setUser } = useApp();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const accounts = JSON.parse(
      localStorage.getItem("foodie-accounts") || "[]",
    );
    if (register) {
      if (
        accounts.some((a) => a.email.toLowerCase() === form.email.toLowerCase())
      ) {
        setError("An account with this email already exists. Please sign in.");
        return;
      }
      const account = {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      };
      localStorage.setItem(
        "foodie-accounts",
        JSON.stringify([...accounts, account]),
      );
      setUser({ name: account.name, email: account.email });
      navigate("/");
    } else {
      const account = accounts.find(
        (a) =>
          a.email.toLowerCase() === form.email.toLowerCase() &&
          a.password === form.password,
      );
      if (!account) {
        setError(
          "Email or password not found. Register first to try the demo.",
        );
        return;
      }
      setUser({ name: account.name, email: account.email });
      navigate("/");
    }
  };
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-visual">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85"
            alt="Fresh colourful meal"
          />
          <div className="auth-visual-overlay" />
          <Link to="/" className="brand auth-brand">
            <span className="brand-mark">
              f<span>!</span>
            </span>
            <span className="brand-name">
              foodie<span>.</span>
            </span>
          </Link>
          <div className="auth-visual-copy">
            <span className="section-kicker">GOOD FOOD IS A LOVE LANGUAGE</span>
            <h2>
              Make room for
              <br />
              <span>something delicious.</span>
            </h2>
            <p>
              Find your favourites, try something new, and make every meal a
              little more special.
            </p>
            <div className="auth-visual-rating">
              <span>★★★★★</span>
              <small>Loved by foodies, made for you.</small>
            </div>
          </div>
          <div className="auth-photo-caption">
            Fresh ingredients · Happy tummies
          </div>
        </div>
        <div className="auth-form-side">
          <div className="auth-form-wrap">
            <div className="auth-mobile-brand">
              <Link to="/" className="brand">
                <span className="brand-mark">
                  f<span>!</span>
                </span>
                <span className="brand-name">
                  foodie<span>.</span>
                </span>
              </Link>
            </div>
            <span className="section-kicker">
              {register ? "JOIN THE FOODIE FAMILY" : "WELCOME BACK, FOODIE"}
            </span>
            <h1>
              {register ? "Create your account." : "Good to see you again."}
            </h1>
            <p className="auth-subtitle">
              {register
                ? "Sign up and let the good meals roll."
                : "Sign in to pick up where your cravings left off."}
            </p>
            <form onSubmit={submit} className="auth-form">
              {register && (
                <label className="form-field">
                  <span>Full name</span>
                  <div className="input-with-icon">
                    <UserRound size={17} />
                    <input
                      name="name"
                      value={form.name}
                      onChange={change}
                      required
                      minLength="2"
                      placeholder="e.g. Payal Patil"
                    />
                  </div>
                </label>
              )}
              <label className="form-field">
                <span>Email address</span>
                <div className="input-with-icon">
                  <Mail size={17} />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={change}
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </label>
              <label className="form-field">
                <span>Password</span>
                <div className="input-with-icon">
                  <LockKeyhole size={17} />
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    value={form.password}
                    onChange={change}
                    required
                    minLength="6"
                    placeholder="At least 6 characters"
                  />
                  <button
                    type="button"
                    className="show-password"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Hide" : "Show"}
                  </button>
                </div>
              </label>
              {error && <p className="form-error">{error}</p>}
              {register && (
                <p className="auth-terms">
                  By creating an account, you agree to our demo{" "}
                  <a href="#terms">Terms of Service</a> and{" "}
                  <a href="#privacy">Privacy Policy</a>.
                </p>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-large auth-submit"
              >
                {register ? "Create account" : "Sign in"}{" "}
                <ArrowRight size={18} />
              </button>
            </form>
            <div className="auth-switch">
              {register ? "Already have an account?" : "New to Foodie?"}{" "}
              <Link to={register ? "/login" : "/register"}>
                {register ? "Sign in" : "Create an account"}
              </Link>
            </div>
            <div className="auth-safe-note">
              <ShieldCheck size={15} /> Demo authentication stored locally in
              your browser.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProfilePage() {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  if (!user)
    return (
      <main className="container profile-page">
        <div className="empty-cart">
          <h2>Sign in to view your profile</h2>
          <Link to="/login" className="btn btn-primary">
            Sign in
          </Link>
        </div>
      </main>
    );
  return (
    <main className="container profile-page">
      <span className="section-kicker">YOUR FOODIE SPACE</span>
      <h1>
        Hey, <span>{user.name.split(" ")[0]}.</span>
      </h1>
      <p>Good food looks good on you.</p>
      <div className="profile-card">
        <div className="profile-avatar">
          <UserRound size={28} />
        </div>
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <small>Foodie member</small>
        </div>
        <button
          className="btn btn-outline"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Sign out
        </button>
      </div>
      <Link to="/menu" className="btn btn-primary">
        Find something tasty <ArrowRight size={17} />
      </Link>
    </main>
  );
}
function NotFoundPage() {
  return (
    <main className="container not-found">
      <span>🍕</span>
      <h1>Oops, wrong turn.</h1>
      <p>This page isn't on the menu. Let's get you back to the good stuff.</p>
      <Link to="/" className="btn btn-primary">
        Back to home <ArrowRight size={17} />
      </Link>
    </main>
  );
}
