import axios from "axios"

const instance = axios.create({
  // baseURL:"https://e-commercebackend-1-xg2z.onrender.com",
  baseURL:"http://localhost:3000"
});

export default instance