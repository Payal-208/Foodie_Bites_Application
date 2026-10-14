export const categories = [
  { id: "all", name: "All dishes", emoji: "🍽️" },
  { id: "pizza", name: "Pizza", emoji: "🍕" },
  { id: "burger", name: "Burgers", emoji: "🍔" },
  { id: "asian", name: "Asian", emoji: "🍜" },
  { id: "healthy", name: "Healthy", emoji: "🥗" },
  { id: "dessert", name: "Desserts", emoji: "🍰" },
  { id: "drinks", name: "Drinks", emoji: "🥤" },
];
export const foods = [
  {
    id: 1,
    name: "Truffle Mushroom Pizza",
    category: "pizza",
    price: 349,
    rating: 4.9,
    reviews: 248,
    time: "20–25 min",
    tag: "Bestseller",
    veg: true,
    description:
      "Stone-baked crust topped with roasted mushrooms, creamy truffle sauce, mozzarella and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
    ingredients: [
      "Mozzarella",
      "Roasted mushrooms",
      "Truffle cream",
      "Fresh herbs",
    ],
  },
  {
    id: 2,
    name: "Smoky BBQ Burger",
    category: "burger",
    price: 279,
    rating: 4.8,
    reviews: 192,
    time: "15–20 min",
    tag: "Popular",
    veg: false,
    description:
      "A juicy grilled patty with smoky BBQ sauce, crisp lettuce, cheddar and our signature toasted bun.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Grilled patty", "Cheddar", "BBQ sauce", "Lettuce"],
  },
  {
    id: 3,
    name: "Creamy Alfredo Pasta",
    category: "asian",
    price: 299,
    rating: 4.7,
    reviews: 156,
    time: "20–25 min",
    tag: "Chef’s pick",
    veg: true,
    description:
      "Silky parmesan cream sauce, perfectly cooked pasta, cracked pepper and a sprinkle of parsley.",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Pasta", "Parmesan", "Cream sauce", "Parsley"],
  },
  {
    id: 4,
    name: "Rainbow Power Bowl",
    category: "healthy",
    price: 249,
    rating: 4.8,
    reviews: 117,
    time: "10–15 min",
    tag: "Fresh choice",
    veg: true,
    description:
      "A bright bowl of avocado, quinoa, cherry tomatoes, greens and a zesty lemon dressing.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Quinoa", "Avocado", "Cherry tomatoes", "Lemon dressing"],
  },
  {
    id: 5,
    name: "Classic Margherita",
    category: "pizza",
    price: 299,
    rating: 4.7,
    reviews: 204,
    time: "18–22 min",
    tag: "",
    veg: true,
    description:
      "A timeless favourite with tomato sauce, creamy mozzarella and fragrant basil on a crisp crust.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
  },
  {
    id: 6,
    name: "Crispy Chicken Bites",
    category: "burger",
    price: 229,
    rating: 4.6,
    reviews: 143,
    time: "15–20 min",
    tag: "Crunchy",
    veg: false,
    description:
      "Golden, crunchy chicken bites served with a creamy house dip and a little kick of seasoning.",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Chicken", "House seasoning", "Crispy coating", "Herb dip"],
  },
  {
    id: 7,
    name: "Berry Cheesecake",
    category: "dessert",
    price: 189,
    rating: 4.9,
    reviews: 98,
    time: "5–10 min",
    tag: "Sweet treat",
    veg: true,
    description:
      "Velvety cheesecake on a buttery biscuit base finished with a tangy mixed-berry compote.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Cream cheese", "Biscuit base", "Mixed berries", "Vanilla"],
  },
  {
    id: 8,
    name: "Mango Smoothie",
    category: "drinks",
    price: 129,
    rating: 4.6,
    reviews: 76,
    time: "5–10 min",
    tag: "Seasonal",
    veg: true,
    description:
      "A chilled, creamy mango smoothie blended fresh for a sunny, refreshing sip.",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Mango", "Yogurt", "Honey", "Ice"],
  },
  {
    id: 9,
    name: "Spicy Miso Noodles",
    category: "asian",
    price: 269,
    rating: 4.7,
    reviews: 121,
    time: "15–20 min",
    tag: "A little spicy",
    veg: true,
    description:
      "Wok-tossed noodles with a savoury miso sauce, seasonal vegetables, sesame and spring onion.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Noodles", "Miso sauce", "Seasonal vegetables", "Sesame"],
  },
  {
    id: 10,
    name: "Avocado Toast",
    category: "healthy",
    price: 199,
    rating: 4.5,
    reviews: 83,
    time: "10–15 min",
    tag: "",
    veg: true,
    description:
      "Sourdough toast topped with smashed avocado, chilli flakes, lemon and microgreens.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Sourdough", "Avocado", "Lemon", "Microgreens"],
  },
  {
    id: 11,
    name: "Double Cheese Burger",
    category: "burger",
    price: 319,
    rating: 4.8,
    reviews: 168,
    time: "18–23 min",
    tag: "Fan favourite",
    veg: false,
    description:
      "Two juicy patties, double cheese, pickles and tangy house sauce stacked in a soft bun.",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Beef patty", "Double cheese", "Pickles", "House sauce"],
  },
  {
    id: 12,
    name: "Chocolate Lava Cake",
    category: "dessert",
    price: 159,
    rating: 4.8,
    reviews: 104,
    time: "8–12 min",
    tag: "Chocolatey",
    veg: true,
    description:
      "Warm chocolate cake with a soft molten centre, perfect for ending your meal on a high note.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Dark chocolate", "Cocoa", "Butter", "Vanilla"],
  },
];
