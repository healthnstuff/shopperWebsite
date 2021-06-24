import axios from "axios";

const CREATE_ORDER = "CREATE_ORDER";
const UPDATE_ORDER = "UPDATE_ORDER";
const GET_ORDER = "GET_ORDER";
const TOKEN = "token";

const create_order = (order) => {
  return {
    type: CREATE_ORDER,
    payload: order,
  };
};

const update_order = (order) => {
  return {
    type: UPDATE_ORDER,
    payload: order,
  };
};

const get_order = (order) => {
  return {
    type: GET_ORDER,
    payload: order,
  };
};

export const createOrder = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/orderInfo/${id}`);
    dispatch(create_order(data));
  } catch (err) {
    console.log("error in createOrder thunk");
  }
};

export const updateOrder = (id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/orderInfo/${id}`);
    dispatch(update_order(data));
  } catch (err) {
    console.log("error in updateOrder thunk");
  }
};

export const getOrder = (id) => async (dispatch) => {
  console.log('id in getOrder thunk = ', id)
  try {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data } = await axios.get(`/api/orderInfo/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(get_order(data));
    }
  } catch (err) {
    console.error(err);
    console.log("error in getOrder thunk");
  }
};

const initialState = [];
export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, action.payload];
    case UPDATE_ORDER:
      return state.map((order) =>
        order.id === action.payload.id ? action.payload : order
      );
    case GET_ORDER:
      return action.payload;
    default:
      return state;
  }
}
