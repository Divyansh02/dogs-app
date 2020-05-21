import {DogsInterface} from "./interface";
import {IStandardAction} from "../commonInterface"

export interface IDogState {
    data:any;
    randomDogData:any;
    breedList:any;
    subBreedList:any;
    specificSubBreedData:any;
    loading:boolean;
    error:string | undefined;
    
}

const initialState:IDogState = {
    data: null,
    randomDogData:null,
    breedList:null,
    subBreedList:null,
    specificSubBreedData:null,
    loading: true,
    error: '' 
}
const DogsReducer = (state:IDogState = initialState, action:IStandardAction):IDogState => {
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
            case DogsInterface.GET_SUB_BREEDS:
                return {
                    ...state,
                    loading: true,
                }
            case DogsInterface.GET_SUB_BREEDS_SUCCESS:
                return {
                    ...state,
                    subBreedList: action.payload,
                    loading: false,
                }
            case DogsInterface.GET_SUB_BREEDS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                }
                case DogsInterface.GET_SPECIFIC_SUB_BREED:
                    return {
                        ...state,
                        loading: true,
                    }
                case DogsInterface.GET_SPECIFIC_SUB_BREED_SUCCESS:
                    return {
                        ...state,
                        specificSubBreedData: action.payload,
                        loading: false,
                    }
                case DogsInterface.GET_SPECIFIC_SUB_BREED_FAILURE:
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