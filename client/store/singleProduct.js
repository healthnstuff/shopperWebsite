import axios from 'axios'

//action types
const SET_PRODUCT = 'SET_PRODUCT'

//action creators
export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product
  }
};

//thunk creators
export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
      dispatch(setProduct(data))
  } catch (error) {
    console.log('There is an error:', error)
  }
};

//initial state
const initialState = {}

//singleProduct reducer
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product
    default:
      return state
  }
}


                                    