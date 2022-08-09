import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {},
  withCredentials: true,
});
