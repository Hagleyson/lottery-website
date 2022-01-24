import { API } from "./api";

export const GamesList = async () => {
  const request = `/cart_games`;
  try {
    let response = await API.get(request);
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
  } catch (error) {
    alert(`hagleyson ${error}`);
    return false;
  }
};
