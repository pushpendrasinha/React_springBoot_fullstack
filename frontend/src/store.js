import { createStore, applyMiddleware } from "redux";
import rootReducer from './services/Reducers/index';
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(rootReducer,
    applyMiddleware(thunk));

export default store;