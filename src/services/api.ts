import axios from "axios";

const api = axios.create({
  baseURL: "http://3.149.244.237/api",
});

export default api;