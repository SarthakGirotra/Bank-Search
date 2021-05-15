import axios from 'axios'
const API = axios.create({ baseURL: 'https://vast-shore-74260.herokuapp.com' })
export const fetchBanks = (city) => API.get(`banks?city=${city}`)