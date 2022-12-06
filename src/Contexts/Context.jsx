import { createContext } from "react";
import { useReducer } from "react";

export const ShopCartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };

  return (
    <ShopCartContext.Provider value={info}>
      {props.children}
    </ShopCartContext.Provider>
  );
};
