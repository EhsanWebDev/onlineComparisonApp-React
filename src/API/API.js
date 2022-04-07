import Axios from 'axios';
import { BASE_URL } from './routes';


const create = (headers, baseURL = BASE_URL) => {

    const api = Axios.create(
        {
            baseURL,
            headers: headers,
            timeout: 50000
        })


    api.interceptors.response.use(function (response) {
        // if received status code 200-299, this function will trigger
        return response;
    },

        function (error) {
            console.log({ error })

            // If status codes falls outside the range of 200-299, this function will trigger
            let message = '';
            let status = '';
            if (error?.response) {
                message = error?.response?.data;
                status = error?.response?.status;
            }

            return Promise.reject(error?.response?.data || error);
        });

    return {
        api,
    }
}

export default {
    create
}