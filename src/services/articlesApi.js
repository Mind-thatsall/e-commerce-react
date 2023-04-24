import axios from "axios";

const articlesApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const articlesApiEndPoint = "/api/products";

// Functions used to interact with the articles on our backend, here we're only fetching because the backend take care of the rest

export const getArticles = async () => {
  try {
    const response = await articlesApi.get(articlesApiEndPoint)
    return response.data;
  } catch(err) {
    console.error(err)
    throw new Error("There's an error:", err.message);
  }
};
