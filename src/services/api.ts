import axios from "axios";

const api = axios.create({
  baseURL: "https://thesimpsonsquoteapi.glitch.me/",
});

export const getSimpsonsCharacters = (count: number = 50) => {
  return api.get(`/quotes?count=${count}`);
};
