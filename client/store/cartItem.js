//a single item in cart
import axios from "axios";

const UPDATE_ITEM = "UPDATE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

const update_item = (product) => {
  return {
    type: UPDATE_ITEM,
    payload: product,
  };
};

const delete_item = (product) => {
  return {
    type: DELETE_ITEM,
    payload: product,
  };
};

export const updateCartItem = (id, body) => async (dispatch) => {
  try {
    const { data } = axios.put(`/api/orderInfo/cart/${id}`, body);
    dispatch(update_item(data));
  } catch (err) {
    ("error in updateCart thunk");
  }
};

export const deleteCartItem = (id, body) => async (dispatch) => {
  try {
    const { data } = axios.delete(`/api/orderInfo/cart/${id}`, body);
    dispatch(delete_item(data));
  } catch (err) {
    ("error in deleteCartItem thunk");
  }
};

const initialState = {};
export default function cartItemReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM:
      return action.payload;
    case DELETE_ITEM:
      return action.payload;
    default:
      return state;
  }
}
