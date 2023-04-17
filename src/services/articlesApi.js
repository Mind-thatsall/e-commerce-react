import axios from "axios";

const articlesApi = axios.create({
  baseURL: "http://localhost:3001",
});

export const articlesApiEndPoint = "/products";

export const getArticles = async () => {
  const response = await articlesApi.get(articlesApiEndPoint);
  return response.data;
};
