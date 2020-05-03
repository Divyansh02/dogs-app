import axios from 'axios';
const baseUrl ="https://dog.ceo/api/breed";
export const getBreedDetailsService = async (breed) => {
    const url = `${baseUrl}/${breed}/images`  
    return await axios.get(url);
}

export const getDogsRandomlyService=async()=>{
    const url=`${baseUrl}s/image/random/10` 
    return await axios.get(url)
}

export const getBreedList = async()=>{   
    const url=`${baseUrl}s/list/all` 
    return await axios.get(url)
}