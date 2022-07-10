import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})
export default rootReducer;