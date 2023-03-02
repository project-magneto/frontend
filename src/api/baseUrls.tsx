import axios from 'axios'

const API_DEV_ENDPOINT = import.meta.env.VITE_API_DEV_ENDPOINT;

export const baseUrl = axios.create({
    baseURL: API_DEV_ENDPOINT,
});