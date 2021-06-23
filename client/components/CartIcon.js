import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import React from "react";

const CartIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "#537C07", className: "cartIcon", size: "3em" }}
    >
      <div>
        <FaShoppingCart />
      </div>
    </IconContext.Provider>
  );
};

export default CartIcon;
