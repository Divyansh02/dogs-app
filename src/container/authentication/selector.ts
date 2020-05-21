import {IState} from '../commonInterface'

export const handleSignInError=(state:IState):string | undefined=>{
    if(state.user){
        return state.user.error;
    }
    return '';
}