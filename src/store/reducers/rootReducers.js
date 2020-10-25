import { combineReducers } from "redux";
import auth from "./auth";
import dashboard from './dashboard';
import profile from "./profile";
import medicine from './medicine';
import cart from './cart';

export default combineReducers({
    auth,
    dashboard,
    profile,
    medicine,
    cart,
})