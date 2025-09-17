import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItem");
      if (storedCart) {
        const parsed = JSON.parse(storedCart);
        return parsed;
      }
      return [];
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      localStorage.removeItem("cartItem");  
      return [];
    }
  });

  // Save to localStorage whenever cartItem changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (product) => {
    const itemCartIn = cartItem.find((item) => item.id === product.id);
    if (itemCartIn) {
      const updatedCart = cartItem.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updatedCart);
      toast.success("Quantity increased successfully");
    } else {
      setCartItem((prev) => [...prev, { ...product, quantity: 1 }]);
      toast.success("Product added successfully");
    }
  };

  const updateQuantity = (productId, action) => {
    setCartItem((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit += 1;
              toast.success("Quantity increased successfully");
            } else if (action === "decrease") {
              newUnit -= 1;
              toast.success("Quantity decreased successfully");
            }
            // If newUnit <= 0, remove the item (adjust if you want to keep at min 1)
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
    toast.success("Product Deleted successfully");
  };

  useEffect(() => {
    // console.log("Cart updated:", cartItem);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);