import {DogsInterface} from "./interface";
import {getDogsService} from "../../service/dogs";

const getDogData = () => {
    return {
        type: DogsInterface.GET_DOGS,
    };
};

const getDogDataSuccess = (res) => {
    return {
        type: DogsInterface.GET_DOGS_SUCCESS,
        payload: res,
    };
};

const getDogDataFailure = (error) => {
    return {
        type: DogsInterface.GET_DOGS_FAILURE,
        error: error.message,
    };
};

const getDogsThunk = () => (dispatch) => {
    try {
        getDogsService()
            .then((res) => dispatch(getDogDataSuccess(res.data)))
            .catch((e) => dispatch(getDogDataFailure(e.response.data)))
    } catch (e) {
        dispatch(getDogDataFailure(e));
    }
}

export {
    getDogData,
    getDogDataSuccess,
    getDogDataFailure,
    getDogsThunk
}


// const getStateList = () => (dispatch) => apiClient
//     .get(`${GET_STATES_LIST}`)
//     .then((stateList) => {
//         dispatch(getAvailableStates(stateList.data.data));
//     })
//     .catch((err) => {
//         dispatch(error(err));
//     });