import axios from "axios";

const GETCART = "GET_CART";

const getCart = (products) => {
  return {
    type: GETCART,
    payload: products,
  };
};

export const fetchCart = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/orderInfo/cart/${id}`);
    return dispatch(getCart(data));
  } catch (err) {
    console.log("error in fetchCart thunk");
    // console.error(error);
  }
};

const initialState = [];
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GETCART:
      return action.payload;
    default:
      return state;
  }
}
