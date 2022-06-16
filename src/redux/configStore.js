import {createStore, combineReducers,applyMiddleware} from "redux";
import Reducer from "./modules/Reducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const rootReducer = combineReducers({Reducer})
const enhancer = applyMiddleware(...middleware)

const store = createStore(rootReducer,enhancer);

export default store;
