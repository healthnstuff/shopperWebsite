import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import React from "react";

const CartIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "orange", className: "cartIcon", size: "2em" }}
    >
      <div>
        <FaShoppingCart />
      </div>
    </IconContext.Provider>
  );
};

export default CartIcon;
