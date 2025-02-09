import { createContext, useContext, useState } from "react";

// Création du contexte
const CartContext = createContext();

// Fournisseur du contexte
export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    { id: 1, name: "Produit 1", price: 20, quantity: 1 },
    { id: 2, name: "Produit 2", price: 30, quantity: 2 },
  ]);

  const updateCartItemQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personnalisé
export function useCart() {
  return useContext(CartContext);
}
