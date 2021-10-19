import axios from 'axios';
import { api as url } from '../utils/Constants'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/'
})

export default api;