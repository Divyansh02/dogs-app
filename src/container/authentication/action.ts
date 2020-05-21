import {UserInterface} from './interface'
import {login} from '../../service/AuthenticationService'
import {IStandardAction,AppThunk,ICallback} from '../commonInterface'
import {Dispatch} from 'redux';

const SignIn = ():IStandardAction => {
    return {
        type: UserInterface.SIGN_IN,
    };
};

const SignInSuccess = (res:any):IStandardAction<any> => {
    console.log('res******',res)
    return {
        type: UserInterface.SIGN_IN_SUCCESS,
        payload: res,
    };
};

const SignInFailure = (error:string):IStandardAction<string> => {
    return {
        type: UserInterface.SIGN_IN_FAILURE,
        error: error,
    };
};

const SignInThunk = (username:string,password:string,callback:(param:ICallback)=>void):AppThunk => (dispatch: Dispatch<IStandardAction<any>>) => {
    try {
        login(username,password)
            .then((res) => {dispatch(SignInSuccess(res))
            callback({status:true})
            })
            .catch((e) => {dispatch(SignInFailure(e))
            callback({status:false})
            })
    } catch (e) {
        dispatch(SignInFailure(e));
    }
}


export {
    SignIn,
    SignInSuccess,
    SignInFailure,
    SignInThunk
}
