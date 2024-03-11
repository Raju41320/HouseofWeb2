// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com", // Replace with your chosen fake cart API
});

export const fetchProductById = (productId) =>
  api.get(`/products/${productId}`);

// export const fetchProductById = (productId) => api.get("/products");
