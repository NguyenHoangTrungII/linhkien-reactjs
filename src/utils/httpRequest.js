import axios from 'axios';

const httRequest = axios.create({
    baseURL: 'http://localhost:8000/v1/',
});

export const get = async (path, option = {}) => {
    const respone = await httRequest.get(path, option);

    return respone;
};

export default httRequest;
