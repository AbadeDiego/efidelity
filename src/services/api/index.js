import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const apiToekn = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    authorization: localStorage.getItem('token')
  },
});
