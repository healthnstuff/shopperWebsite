//a single item in cart
import axios from "axios";

const UPDATE_CART = "UPDATE_CART";
const update_cart = (product) => {
  return {
    type: UPDATE_CART,
    payload: product,
  };
};

export const updateCartItem = (id, body) => async (dispatch) => {
  try {
    const { data } = axios.put(`/api/orderInfo/cart/${id}`, body);
    dispatch(update_cart(data));
  } catch (err) {
    ("error in updateCart thunk");
  }
};

const initialState = {};
export default function cartItemReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return action.payload;
    default:
      return state;
  }
}
