# Foodie — Food Ordering Frontend

Responsive food ordering portfolio demo built with React, React Router, Vite, HTML, CSS, and Lucide icons.

## Run in Visual Studio Code
1. Install Node.js LTS from https://nodejs.org/
2. Extract the ZIP and open the `foodie-bites` folder in Visual Studio Code.
3. Open Terminal → New Terminal.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL Vite prints (usually http://localhost:5173).

## Features
- Responsive homepage with food categories, popular dishes, testimonials and footer
- Menu with search, category filters, vegetarian-only filter and sorting
- Food details with ingredients, quantity selector and add to cart
- Cart with quantity controls, remove item, delivery threshold, tax and total
- Register / sign-in demo using browser localStorage
- Checkout form with delivery details and selectable demo payment methods
- Demo order confirmation
- Cart and session persist after refresh

## Folder structure
```text
foodie-bites/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── Footer.jsx
    │   ├── FoodCard.jsx
    │   ├── Header.jsx
    │   └── ScrollToTop.jsx
    ├── context/
    │   └── AppContext.jsx
    └── data/
        └── foods.js
```

## Demo limitations
- No real payment gateway or backend is connected. Checkout simulates an order; no payment is collected. Never enter real card details.
- Demo accounts are stored in the browser localStorage and are not secure production authentication.
- Food images load from Unsplash, so internet access is needed.
- Customize the brand, content, colors, images, and features before describing it as your own portfolio work.
