import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

let client = null as AxiosInstance;

export function initializeClient(jwt : string) : void {
	const token = "Bearer " + jwt;
	client = axios.create({
		baseURL: process.env.REACT_APP_AUTH_PROVIDER + "/api",
		headers: { Authorization: token },
	});
    client.interceptors.response.use(handleSuccess, handleError);
    console.log("Client initialized with jwt: ", jwt);
}

export function getApiClient() : AxiosInstance {
    if(!client) {
        throw new Error("Client has not been initialized");
    }
    return client;
}


export const authClient = axios.create({
	baseURL: process.env.REACT_APP_AUTH_PROVIDER + "/auth",
});


authClient.interceptors.response.use(handleSuccess, handleError);

function handleSuccess(response: AxiosResponse) {
	return response.data;
}

function handleError(error: AxiosError) {
	console.log(error);
}