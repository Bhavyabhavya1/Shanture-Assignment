import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchTopProducts = async () => {
  try {
    const response = await API.get('/analytics/top-products');
    console.log("API Response from /analytics/top-products:", response.data); 
    return response;
  } catch (error) {
    console.error("Error fetching top products:", error); 
    throw error;
  }
};
