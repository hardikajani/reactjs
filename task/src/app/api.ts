import axios from 'axios'

const API_URL = 'https://randomuser.me/api/?page=10&results=100';

export const fetchUserDara = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  };