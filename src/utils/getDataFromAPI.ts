import axios from 'axios';

const BASE_URL = 'https://6354f950da523ceadcf78ff2.mockapi.io/api/v1/';

export default axios.create({
  baseURL: BASE_URL,
});