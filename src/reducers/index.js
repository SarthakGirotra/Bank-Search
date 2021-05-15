import { combineReducers } from "redux";
import banks from './banks'
import filter from './filter'
import fav from "./fav"
export default combineReducers({ banks, filter, fav })