
import axios from 'axios';

const baseURL = "/api/"; 
const comicApi = axios.create({
  baseURL,
  timeout: 5000
});

export default comicApi;