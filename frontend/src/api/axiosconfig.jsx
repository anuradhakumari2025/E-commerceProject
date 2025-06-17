import axios from "axios"

const instance = axios.create({
  baseURL:"https://e-commercebackend-oglu.onrender.com",
});

export default instance