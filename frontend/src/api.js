import axios from "axios";

const API_URL = "http://localhost:3000/";

const api = {
  getUsers() {
    return axios.get(API_URL + "usuarios");
  },
  getUser(id) {
    return axios.get(API_URL + `usuarios/${id}`);
  },
  addUser(data) {
    return axios.post(API_URL + "usuarios", data);
  },
  updateUser(id, data) {
    return axios.put(API_URL + `usuarios/${id}`, data);
  },
  deleteUser(id) {
    return axios.delete(API_URL + `usuarios/${id}`);
  },
};

export default api;