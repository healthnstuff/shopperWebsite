import axios from "axios";

/**
 * ACTION TYPES
 */
const GET_SINGLE_USER = "GET_SINGLE_USER";
const GET_USERS = "GET_USERS";
/**
 * ACTION CREATORS
 */
const getSingleUser = (user) => ({ type: GET_SINGLE_USER, user });
const getUsers = (users) => ({ type: GET_USERS, users });

/**
 * THUNK CREATORS
 */
export const _getSingleUser = (id) => async (dispatch) => {
  console.log("thunk id", id)
  const token = window.localStorage.getItem('token');
  if (token) {
    const { data } = await axios.get(`/api/users/${id}`, {
      headers: {
        authorization: token
      }
    });
    return dispatch(getSingleUser(data));
  }
};

export const _getUsers = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    const { data } = await axios.get("/api/users", {
      headers: {
        authorization: token
      }
    });
    return dispatch(getUsers(data));
  }
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.user;
      // return state.filter((user) => user.id === action.user.id)[0];
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}
