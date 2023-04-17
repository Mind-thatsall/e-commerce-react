import axios from "axios";

const cartApi = axios.create({
  baseURL: "http://localhost:3001",
});

export const cartApiEndPoint = "/cart";

export const getCartItems = async () => {
  const response = await cartApi.get(cartApiEndPoint);
  return response.data;
};

export const addCartItem = async (item) => {
  const response = await cartApi.post(cartApiEndPoint, item);
  return response.data;
};
