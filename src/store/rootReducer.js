import { combineReducers } from 'redux';
import DogsReducer from "../container/Home/reducer";

const rootReducer = combineReducers({
        dogs: DogsReducer,
    }
)
export default rootReducer;