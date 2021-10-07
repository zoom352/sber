import { combineReducers, createStore } from "redux";
import footerReducer from "./footer-reducer.js";
import HighestReducer from './highest-reducer.js'
import PartnersReducer from "./partners-reducer.js";
import SalarryReducer from "./salarry-reducer.js";

const reducers = combineReducers({
    texts: HighestReducer,
    partners: PartnersReducer,
    footer: footerReducer,
    salarry: SalarryReducer
})


const store = createStore(reducers)



export default store;