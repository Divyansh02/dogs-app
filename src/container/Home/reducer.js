import {DogsInterface} from "./interface";

const initialState = {
    data: null,
    randomDogData:null,
    breedList:null,
    loading: true,
    error: ''
}
const DogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case DogsInterface.GET_BREED_DETAILS:
            return {
                ...state,
                loading: true,
            }
        case DogsInterface.GET_BREED_DETAILS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case DogsInterface.GET_BREED_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
            case DogsInterface.GET_DOGS_RANDOM:
            return {
                ...state,
                loading: true,
            }
        case DogsInterface.GET_DOGS_RANDOM_SUCCESS:
            return {
                ...state,
                randomDogData: action.payload,
                loading: false,
            }
        case DogsInterface.GET_DOGS_RANDOM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
            case DogsInterface.GET_BREEDS:
                return {
                    ...state,
                    loading: true,
                }
            case DogsInterface.GET_BREEDS_SUCCESS:
                return {
                    ...state,
                    breedList: action.payload,
                    loading: false,
                }
            case DogsInterface.GET_BREEDS_FAILURE:
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