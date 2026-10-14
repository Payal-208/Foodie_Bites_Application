import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('foodie-cart') || '[]');
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('foodie-user') || 'null');
    } catch {
      return null;
    }
  });

  // Save cart changes in browser storage.
  useEffect(() => {
    localStorage.setItem('foodie-cart', JSON.stringify(cart));
  }, [cart]);

  // Save the demo user's profile in browser storage.
  useEffect(() => {
    if (user) {
      localStorage.setItem('foodie-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('foodie-user');
    }
  }, [user]);

  // Add an item or increase its existing quantity.
  const addToCart = (food, quantity = 1) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === food.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentCart, { ...food, quantity }];
    });
  };

  // Update quantity or remove the item if its quantity reaches zero.
  const updateQuantity = (id, quantity) => {
    setCart((currentCart) => {
      if (quantity < 1) {
        return currentCart.filter((item) => item.id !== id);
      }

      return currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);
  const logout = () => setUser(null);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      cart,
      user,
      setUser,
      logout,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartCount,
      subtotal,
    }),
    [cart, user, cartCount, subtotal]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be inside AppProvider');
  }

  return context;
}
