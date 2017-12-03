import axios from "axios";

const AXIOS = axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  timeout: 5000
});

export const getCourses = () => {
  return AXIOS.get('/course');
};

export const test = () => {
    return axios.get('https://www.google.com');
};