import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from "react";
import { useToast } from "./ToastContext";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const { showToast } = useToast();

  // Load from local storage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Sync with local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback(
    (product: Product) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          showToast(`Updated quantity for ${product.name}`, "info");
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          );
        }
        showToast(`${product.name} added to cart`, "success");
        return [...prevCart, { ...product, quantity: 1 }];
      });
    },
    [showToast]
  );

  const removeFromCart = useCallback(
    (productId: string) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      showToast("Item removed from cart", "info");
    },
    [showToast]
  );

  const getCartCount = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
