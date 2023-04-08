import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
	baseURL: 'https://gabriel-portfolio-backend.onrender.com',
	responseType: 'json',
	timeout: 5000
})
