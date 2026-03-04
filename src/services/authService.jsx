import api from "../axios";

// Handle Login

export const loginService = async (credentials) => {
    const response = await api.post("/login", credentials);
    return response.data;
}