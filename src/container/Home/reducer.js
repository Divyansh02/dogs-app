import {DogsInterface} from "./interface";

const initialState = {
    data: null,
    loading: true,
    error: ''
}
const DogsReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case DogsInterface.GET_DOGS:
            return {
                ...state,
                loading: true,
            }
        case DogsInterface.GET_DOGS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case DogsInterface.GET_DOGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
}

export default DogsReducer;