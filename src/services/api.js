import axios from "axios";
// import { cacheAdapterEnhancer } from 'axios-extensions';

const apiBaseUrl = "http://api.tvmaze.com";

/**
 * Axios basic configuration
 * Some general configuration can be added like timeout, headers, params etc. More details can be found on https://github.com/axios/axios
 * */
const config = {
    baseURL: apiBaseUrl,
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    params: {}
};

/**
 * Creating the instance of Axios
 * It is because, in large scale application we may need to consume APIs from more than single server,
 * So, may need to create multiple http client with different config
 * Only this client will be used rather than axios in the application
 **/
const api = axios.create(config);

/** Adding the response interceptors */
api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
  
export default api;