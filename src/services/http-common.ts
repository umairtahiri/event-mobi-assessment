import axios from "axios";

const https = () => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL as string,
  });

  client.interceptors.response.use(undefined, (error) => {
    throw error;
  });

  return client;
};

export default https;
