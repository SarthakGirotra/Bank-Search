import { combineReducers } from "redux";
import banks from './banks'
import filter from './filter'
import fav from "./fav"
import load from "./load"
export default combineReducers({ banks, filter, fav, load })