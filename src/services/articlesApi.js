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
    if(err.code === "ERR_NETWORK") throw new Error("An error occurred while getting articles");
  }
};

export const getArticlesFromCategory = async (gender, slug) => {
  try {
    const response = await articlesApi.get(`/api/${gender}/categories/${slug}/products`)
    return response.data;
  } catch(err) {
    console.error(err)
    if(err.code === "ERR_NETWORK") throw new Error("An error occurred while getting articles");
  }
};
