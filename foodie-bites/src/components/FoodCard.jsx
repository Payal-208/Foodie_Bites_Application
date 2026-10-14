import { Heart, Plus, Star, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
export default function FoodCard({ food }) {
  const { addToCart } = useApp();
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const add = () => {
    addToCart(food);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 850);
  };
  return (
    <article className="food-card">
      <div className="food-image-wrap">
        <Link to={`/food/${food.id}`}>
          <img
            src={food.image}
            alt={food.name}
            className="food-image"
            loading="lazy"
          />
        </Link>
        {food.tag && <span className="food-tag">{food.tag}</span>}
        <button
          className={`favorite-button ${liked ? "is-liked" : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label="Toggle favourite"
        >
          <Heart size={17} fill={liked ? "currentColor" : "none"} />
        </button>
        <span
          className={`veg-dot ${food.veg ? "veg" : "non-veg"}`}
          title={food.veg ? "Vegetarian" : "Non-vegetarian"}
        >
          <i />
        </span>
      </div>
      <div className="food-card-body">
        <div className="food-title-line">
          <Link to={`/food/${food.id}`} className="food-title">
            {food.name}
          </Link>
          <span className="rating">
            <Star size={13} fill="currentColor" />
            {food.rating}
          </span>
        </div>
        <p className="food-description">{food.description}</p>
        <div className="food-card-bottom">
          <div>
            <strong className="food-price">₹{food.price}</strong>
            <span className="delivery-time">
              <Clock3 size={12} />
              {food.time}
            </span>
          </div>
          <button
            className={`add-button ${added ? "added" : ""}`}
            onClick={add}
            aria-label={`Add ${food.name} to cart`}
          >
            {added ? "✓" : <Plus size={19} />}
          </button>
        </div>
      </div>
    </article>
  );
}
