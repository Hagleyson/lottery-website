import { API } from "./api";

export const PostGamesMade = async (values: any) => {
  const request = `/bet/new-bet`;

  try {
    let response = await API.post(request, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
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
