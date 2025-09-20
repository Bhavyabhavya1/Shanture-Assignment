import axios from 'axios';

const API = axios.create({
  baseURL: 'https://shanture-assignment-backend-gws7.onrender.com/api',
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
