import axios from 'axios';

// Create an axios instance
const ApiService = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	headers: {
		Accept: "application/json",
		"Access-Control-Allow-Origin": "Authorization",
		"Content-Type": "application/json",
		"X-Requested-With": "XMLHttpRequest"
	},
	mode: "no-cors",
	withCredentials: true,
	crossdomain: true
});

// Interceptor to add token to headers
ApiService.interceptors.request.use(
	(config) => {
		config.headers.Authorization = 'Contoh Token'
		return config;
	},
	(error) => {
		return handleError(error);
	}
);

// Applying the error handling function to the response interceptor
ApiService.interceptors.response.use(
	async (response) => {
		return response;
	},
	async (error) => {
		return handleError(error);
	},
);

// A separate function to handle global error responses
function handleError(error) {
	console.log('handleError', error.response.status);
	if (error.response.status >= 500) {
		console.log('server error')
	}else if (error.response.status >= 400) {
		console.log('permintaan tidak sesuai')
	}
	return Promise.reject(error);
}


export default ApiService;
