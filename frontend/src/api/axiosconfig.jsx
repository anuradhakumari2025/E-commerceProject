import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerceproject-backend.onrender.com/api",
});

export default instance;
