import {DogsInterface} from "./interface";
import {getBreedDetailsService,getDogsRandomlyService,getBreedList,getSubBreedList,getSubBreedSpecificDetails} from "service/dogs";
import {IStandardAction,AppThunk} from "../commonInterface"
import {Dispatch} from 'redux';
import {IDogPayload} from 'domain/models/dogsModel'

const getBreedDetails = ():IStandardAction => {
    return {
        type: DogsInterface.GET_BREED_DETAILS,
    };
};

const getBreedDetailsSuccess =  (res:any):IStandardAction<any> => {
    return {
        type: DogsInterface.GET_BREED_DETAILS_SUCCESS,
        payload: res,
    };
};

const getBreedDetailsFailure = (error:string):IStandardAction<string> => {
    return {
        type: DogsInterface.GET_BREED_DETAILS_FAILURE,
        error: error,
    };
};

const getBreedDetailsThunk = (breedName:string) => (dispatch: Dispatch<IStandardAction<any>>) => {
    try {
        getBreedDetailsService(breedName)
            .then((res) => dispatch(getBreedDetailsSuccess(res.data)))
            .catch((e) => dispatch(getBreedDetailsFailure(e.response)))
    } catch (e) {
        dispatch(getBreedDetailsFailure(e));
    }
}

const getDogsRandomlyData = ():IStandardAction => {
    return {
        type: DogsInterface.GET_DOGS_RANDOM,
    };
};

const getDogsRandomlyDataSuccess = (res:IDogPayload):IStandardAction<IDogPayload> => {
    return {
        type: DogsInterface.GET_DOGS_RANDOM_SUCCESS,
        payload: res,
    };
};

const getDogsRandomlyDataFailure = (error:any):IStandardAction<string> => {
    return {
        type: DogsInterface.GET_DOGS_RANDOM_FAILURE,
        error: error.message,
    };
};

const getDogsRandomlyThunk = ():AppThunk => (dispatch: Dispatch<IStandardAction<any>>) => {
    try {
        getDogsRandomlyService()
            .then((res) => dispatch(getDogsRandomlyDataSuccess(res.data)))
            .catch((e) => dispatch(getDogsRandomlyDataFailure(e)))
    } catch (e) {
        dispatch(getDogsRandomlyDataFailure(e));
    }
}

const getBreeds = ():IStandardAction => {
    return {
        type: DogsInterface.GET_BREEDS,
    };
};

const getBreedsSuccess = (res:any):IStandardAction<any> => {
    return {
        type: DogsInterface.GET_BREEDS_SUCCESS,
        payload: res,
    };
};

const getBreedsFailure = (error:any):IStandardAction<string> => {
    return {
        type: DogsInterface.GET_BREEDS_FAILURE,
        error: error.message,
    };
};

const getBreedsThunk = ():AppThunk => (dispatch: Dispatch<IStandardAction<any>>) => {
    try {
        getBreedList()
            .then((res) => dispatch(getBreedsSuccess(res.data)))
            .catch((e) => dispatch(getBreedsFailure(e)))
    } catch (e) {
        dispatch(getBreedsFailure(e));
    }
}

const getSubBreeds = ():IStandardAction => {
    return {
        type: DogsInterface.GET_SUB_BREEDS,
    };
};

const getSubBreedsSuccess = (res:any):IStandardAction<any> => {
    return {
        type: DogsInterface.GET_SUB_BREEDS_SUCCESS,
        payload: res.message,
    };
};

const getSubBreedsFailure = (error:any):IStandardAction<string> => {
    return {
        type: DogsInterface.GET_SUB_BREEDS_FAILURE,
        error: error.message,
    };
};

const getSubBreedsThunk = (breedName:string):AppThunk => (dispatch : Dispatch<IStandardAction<any>>) => {
    try {
        getSubBreedList(breedName)
            .then((res) => dispatch(getSubBreedsSuccess(res.data)))
            .catch((e) => dispatch(getSubBreedsFailure(e)))
    } catch (e) {
        dispatch(getBreedsFailure(e));
    }
}

const getSpecificSubBreeds = ():IStandardAction => {
    return {
        type: DogsInterface. GET_SPECIFIC_SUB_BREED,
    };
};

const getSpecificSubBreedsSuccess = (res:any):IStandardAction<any> => {
    return {
        type: DogsInterface. GET_SPECIFIC_SUB_BREED_SUCCESS,
        payload: res,
    };
};

const getSpecificSubBreedsFailure = (error:any):IStandardAction<string> => {
    return {
        type: DogsInterface. GET_SPECIFIC_SUB_BREED_FAILURE,
        error: error.message,
    };
};

const getSpecificSubBreedsThunk = ({breedName,subBreedName}:{breedName:string,subBreedName:string}):AppThunk => (dispatch:Dispatch<IStandardAction<any>>) => {
    try {
        getSubBreedSpecificDetails({breedName,subBreedName})
            .then((res) => dispatch(getSpecificSubBreedsSuccess(res.data.message)))
            .catch((e) => dispatch(getSpecificSubBreedsFailure(e)))
    } catch (e) {
        dispatch(getSpecificSubBreedsFailure(e));
    }
}



export {
    getBreedDetails,
    getBreedDetailsSuccess,
    getBreedDetailsFailure,
    getBreedDetailsThunk,
    getDogsRandomlyData,
    getDogsRandomlyDataSuccess,
    getDogsRandomlyDataFailure,
    getDogsRandomlyThunk,
    getBreeds,
    getBreedsSuccess,
    getBreedsFailure,
    getBreedsThunk,
    getSubBreeds,
    getSubBreedsSuccess,
    getSubBreedsFailure,
    getSubBreedsThunk,
    getSpecificSubBreeds,
    getSpecificSubBreedsSuccess,
    getSpecificSubBreedsFailure,
    getSpecificSubBreedsThunk
}
