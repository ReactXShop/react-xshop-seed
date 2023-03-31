import React from "react";
import { Token } from "../types/types";

type ShoppingCartContextType = {
  cart: Token[];
  total: number;
  addOrRemoveFromCart: (token: Token) => void;
  isInCart: (token: Token) => boolean;
  clearCart: () => void;
};

const ShoppingCartContext = React.createContext<ShoppingCartContextType>(null!);
ShoppingCartContext.displayName = "ShoppingCartContext";

export const ShoppingCartProvider = (props: any) => {
  const [cart, setCart] = React.useState<Token[]>([]);
  const [total, setTotal] = React.useState(0);

  const isSameToken = (token1: Token, token2: Token) => {
    return token1.id === token2.id && token1.collectionAddress === token2.collectionAddress;
  };

  const isInCart = (tokenToCheck: Token) => {
    return cart.find((token) => isSameToken(token, tokenToCheck));
  };

  const addToCart = (tokenToAdd: Token) => {
    if (isInCart(tokenToAdd)) return;
    setCart([...cart, tokenToAdd]);
  };

  const removeFromCart = (tokenToRemove: Token) => {
    setCart(cart.filter((token) => !isSameToken(token, tokenToRemove)));
  };

  const addOrRemoveFromCart = (token: Token) => {
    if (isInCart(token)) {
      removeFromCart(token);
    } else {
      addToCart(token);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => {
      return acc + (product.price || 0);
    }, 0);
    setTotal(total);
  };

  React.useEffect(() => {
    calculateTotal();
  }, [cart.length]);

  // this can be optimized by using useMemo, if performance is an issue
  const value = { cart, addOrRemoveFromCart, isInCart, total, clearCart };

  return <ShoppingCartContext.Provider value={value} {...props} />;
};

export function useShoppingCart() {
  const context = React.useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
  }
  return context;
}
