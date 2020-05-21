import {IState} from '../commonInterface'

export const getBreedDetails = (state:IState):any => {
    if(state.dogs.data) {
        return state.dogs.data.message;
    }
}

export const getDogsImageRandomlySelector = (state:IState):any => {
    if(state.dogs.randomDogData) {
        return state.dogs.randomDogData.message;
    }
}

export const getBreedList = (state:IState):any => {
    if(state.dogs.breedList) {
        return state.dogs.breedList.message;
    }
}

export const getSubBreedList = (state:IState):any => {   
    if(state.dogs.subBreedList) {
        return state.dogs.subBreedList;
    }
}  

export const getSpecificSubBreedData = (state:IState):any => {   
    if(state.dogs.specificSubBreedData) {
        return state.dogs.specificSubBreedData;
    }
}  

export const getErrorState = (state:IState):string => {
    if(state.dogs.error) {
        return state.dogs.error;
    }
    return '';
}

export const getLoadingState = (state:IState):boolean => {   
        return state.dogs.loading;
    
}