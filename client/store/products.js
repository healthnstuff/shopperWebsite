import axios from 'axios'

//action types
const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = "CREATE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

//action creators
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products
  }
};

const createProduct = product => ({type: CREATE_PRODUCT, product});
const updateProduct = product => ({type: UPDATE_PRODUCT, product});

//thunk creators
export const fetchProducts = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/products')
      dispatch(setProducts(data))
  } catch (error) {
    console.log('There is an error:', error)
  }
};

export const _createProduct = (product) => async dispatch => {
  try {
    const token = window.localStorage.getItem('token');
    if (token) {
      const { data } = await axios.post('/api/products', product, {
        headers: {
          authorization: token
        }
      });
      return dispatch(createProduct(data));
    }
  } catch (err) {
    console.error(err);
  }
}

// export const _updateProduct = (product)

//initial state
const initialState = []

//campusesreducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case CREATE_PRODUCT:
      return [ ...state, action.product ]
    default:
      return state
  }
}
