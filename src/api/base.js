import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.URL_BASE + 'api',
  timeout: 1000
});


