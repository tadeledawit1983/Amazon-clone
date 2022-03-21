import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/website-9e31f/us-central1/api',
});

export default instance;
//http://localhost:5001/website-9e31f/us-central1/api
// http://localhost:4000/functions