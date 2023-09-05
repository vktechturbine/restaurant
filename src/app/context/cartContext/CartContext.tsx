"use client"
import { createContext, useContext, ReactNode, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const cartContextValue: CartContextType = {
    cart,
    addToCart,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};
