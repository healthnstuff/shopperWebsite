import axios from "axios";

const CREATE_ORDER = "CREATE_ORDER";
const UPDATE_ORDER = "UPDATE_ORDER";

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
    console.log(data);
    dispatch(update_order(data));
  } catch (err) {
    console.log("error in updateOrder thunk");
  }
};

const initialState = {};
export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return action.payload;
    case UPDATE_ORDER:
      return action.payload;
    default:
      return state;
  }
}
