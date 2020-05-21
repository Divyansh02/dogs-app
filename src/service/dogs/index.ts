import axios from 'axios';
const baseUrl ="https://dog.ceo/api/breed"; 
export const getBreedDetailsService = async (breed:string):Promise<any> => {
    const url = `${baseUrl}/${breed}/images`  
    return await axios.get(url);
}

export const getDogsRandomlyService=async():Promise<any>=>{
    const url=`${baseUrl}s/image/random/10` 
    return await axios.get(url)
}

export const getBreedList = async():Promise<any>=>{   
    const url=`${baseUrl}s/list/all` 
    return await axios.get(url)
}  

export const getSubBreedList = async(breedName:string):Promise<any>=>{   
    const url=`${baseUrl}/${breedName}/list` 
    return await axios.get(url)
} 

export const getSubBreedSpecificDetails = async({breedName,subBreedName}:{breedName:string,subBreedName:string}):Promise<any>=>{   
    const url=`${baseUrl}/${breedName}/${subBreedName}/images` 
    return await axios.get(url)  
} 