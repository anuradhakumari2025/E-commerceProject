import axios from "axios"

const instance = axios.create({
  baseURL:"e-commercebackend.railway.internal",
});

export default instance