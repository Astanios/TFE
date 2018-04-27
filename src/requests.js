import axios from "axios";

const api = {
  local: 'http://localhost:8000/',
  dev: '',
  stg: '',
};

const AXIOS = axios.create({
  baseURL: api.local,
  timeout: 5000,
})

const config = {
  headers: {'Content-Type': 'application/json'}
};

export const test = query => AXIOS.get('api/');
export const jsontest = query => AXIOS.post('json/', query, config);