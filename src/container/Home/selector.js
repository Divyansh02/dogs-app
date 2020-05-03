export const getBreedDetails = (state) => {
    if(state.dogs.data) {
        return state.dogs.data.message;
    }
}

export const getDogsImageRandomlySelector = (state) => {
    if(state.dogs.randomDogData) {
        return state.dogs.randomDogData.message;
    }
}

export const getBreedList = (state) => {
    if(state.dogs.breedList) {
        return state.dogs.breedList.message;
    }
}

export const getErrorState = (state) => {
    if(state.dogs) {
        return state.dogs.error;
    }
}