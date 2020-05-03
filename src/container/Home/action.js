import {DogsInterface} from "./interface";
import {getBreedDetailsService,getDogsRandomlyService,getBreedList} from "../../service/dogs";


const getBreedDetails = () => {
    return {
        type: DogsInterface.GET_BREED_DETAILS,
    };
};

const getBreedDetailsSuccess =  (res) => {
    return {
        type: DogsInterface.GET_BREED_DETAILS_SUCCESS,
        payload: res,
    };
};

const getBreedDetailsFailure = (error) => {
    return {
        type: DogsInterface.GET_BREED_DETAILS_FAILURE,
        error: error,
    };
};

const getBreedDetailsThunk = (breedName) => (dispatch) => {
    try {
        getBreedDetailsService(breedName)
            .then((res) => dispatch(getBreedDetailsSuccess(res.data)))
            .catch((e) => dispatch(getBreedDetailsFailure(e.response)))
    } catch (e) {
        dispatch(getBreedDetailsFailure(e));
    }
}

const getDogsRandomlyData = () => {
    return {
        type: DogsInterface.GET_DOGS_RANDOM,
    };
};

const getDogsRandomlyDataSuccess = (res) => {
    return {
        type: DogsInterface.GET_DOGS_RANDOM_SUCCESS,
        payload: res,
    };
};

const getDogsRandomlyDataFailure = (error) => {
    return {
        type: DogsInterface.GET_DOGS_RANDOM_FAILURE,
        error: error.message,
    };
};

const getDogsRandomlyThunk = () => (dispatch) => {
    try {
        getDogsRandomlyService()
            .then((res) => dispatch(getDogsRandomlyDataSuccess(res.data)))
            .catch((e) => dispatch(getDogsRandomlyDataFailure(e)))
    } catch (e) {
        dispatch(getDogsRandomlyDataFailure(e));
    }
}

const getBreeds = () => {
    return {
        type: DogsInterface.GET_BREEDS,
    };
};

const getBreedsSuccess = (res) => {
    return {
        type: DogsInterface.GET_BREEDS_SUCCESS,
        payload: res,
    };
};

const getBreedsFailure = (error) => {
    return {
        type: DogsInterface.GET_BREEDS_FAILURE,
        error: error.message,
    };
};

const getBreedsThunk = () => (dispatch) => {
    try {
        getBreedList()
            .then((res) => dispatch(getBreedsSuccess(res.data)))
            .catch((e) => dispatch(getBreedsFailure(e)))
    } catch (e) {
        dispatch(getBreedsFailure(e));
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
    getBreedsThunk
}
