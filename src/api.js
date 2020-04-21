import axios from 'axios';


const api = axios.create({
  baseURL: "http://rem-rest-api.herokuapp.com/api/todos",
  // this API relies on cookies, so enable them
  withCredentials: true,
});

export default api;