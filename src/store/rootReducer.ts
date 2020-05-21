import { combineReducers } from 'redux';
import DogsReducer from "../container/Home/reducer";
import UserReducer from "../container/authentication/reducer";

const rootReducer = combineReducers({
        dogs: DogsReducer,
        user:UserReducer
    }
)
export default rootReducer;