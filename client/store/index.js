import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import cartReducer from "./cart";
import productsReducer from "./products";
import singleProductReducer from "./singleProduct";

const reducer = combineReducers({
  auth,
  cart: cartReducer,
  products: productsReducer,
  singleProduct: singleProductReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
