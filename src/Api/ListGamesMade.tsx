import { API } from "./api";

export const ListGamesMade = async () => {
  const request = `/bet/all-bets`;
  try {
    let response = await API.get(request);
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
  } catch (error) {
    alert(`Erro ${error}`);
    return false;
  }
};
