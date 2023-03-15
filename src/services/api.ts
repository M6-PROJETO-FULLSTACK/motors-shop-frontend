import axios from 'axios';

const api = axios.create({
  baseURL: 'https://motors-shop-deploy-api.onrender.com/',
  timeout: 5000,
});

export default api;

export const config = () => {
  const token = localStorage.getItem("@MotorsShop:token");
  
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
