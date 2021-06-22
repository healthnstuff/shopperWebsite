import axios from 'axios'

//action types
const SET_USERS = 'SET_USERS'

//action creators
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
};

//thunk creators
export const fetchUsers = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/users')
      dispatch(setUsers(data))
  } catch (error) {
    console.log('There is an error:', error)
  }
};

//initial state
const initialState = []

//users reducer
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}
