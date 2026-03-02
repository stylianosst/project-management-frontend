import axios from "axios";

const api = axios.create({
  baseURL: "http://project-management.test/api",
});

export default api;