import {UserInterface} from "./interface";
import {IStandardAction} from "../commonInterface";

export interface IUserState {
    data:any;
    loading:boolean;
    error:string | undefined;
}

const initialState:IUserState = {
    data: null,
    loading: true,
    error: ''
}
const UserReducer = (state:IUserState = initialState, action:IStandardAction):IUserState => {
    switch(action.type) {
        case UserInterface.SIGN_IN:
            return {
                ...state,
                loading: true,
            }
        case UserInterface.SIGN_IN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case UserInterface.SIGN_IN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }

        default:
            return state;
    }
}

export default UserReducer;