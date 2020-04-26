import axios from 'axios';
export const getDogsService = async () => {
    const url = 'https://dog.ceo/api/breed/hound/images'
    return await axios.get(url);
}