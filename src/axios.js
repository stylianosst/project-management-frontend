import axios from "axios";

const api = axios.create({
  baseURL: "https://project-management-api.steliospap.com/api/",
});

export default api;
