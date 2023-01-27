/* eslint-disable prettier/prettier */
import axios from 'axios'

const BASE_API_URL = 'https://swapi.dev/api/people'
const AXIOS_TIMEOUT_INSTANCE = 10000

export const AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: AXIOS_TIMEOUT_INSTANCE
})