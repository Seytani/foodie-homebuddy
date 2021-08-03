import axios, { AxiosError, AxiosResponse } from 'axios';
import { getCookie } from './helpers';

const token = getCookie('jwt').replace('+', ' ');
const client = axios.create({
    baseURL: process.env.REACT_APP_AUTH_PROVIDER + '/api/v1',
    headers: { Authorization: token }
});

client.interceptors.response.use(handleSuccess, handleError);

function handleSuccess(response: AxiosResponse) {
    return response.data;
}

function handleError(error: AxiosError) {
    console.log(error);
}

export default client;

export interface UserInterface {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface IngredientInterface {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    user_id: number
}

export interface RecipeInterface {
    id: number;
    name: string;
    content: string;
    created_at: string;
    updated_at: string;
    user_id: number
}