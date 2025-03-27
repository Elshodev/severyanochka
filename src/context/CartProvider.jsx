import { createContext, useEffect, useState } from "react";
export const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [cartDatas, setCartDatas] = useState(
    JSON.parse(localStorage.getItem("cartDatas")) || []
  );
  useEffect(() => {
    localStorage.setItem("cartDatas", JSON.stringify(cartDatas));
  }, [cartDatas]);
  return (
    <CartContext.Provider
      value={{
        cartDatas,
        setCartDatas,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
