import axios from "axios";

export const axiosTractianApiInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
});
