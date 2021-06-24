import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import productsReducer from "./products";
import singleProductReducer from "./singleProduct";
import cartItemReducer from "./cartItem";
import users from "./users";
import orderReducer from "./orderInfo";

const reducer = combineReducers({
  auth,
  products: productsReducer,
  singleProduct: singleProductReducer,
  users,
  orders: orderReducer,
  cart: cartItemReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
