import { API } from "./api";

export const PostGamesMade = async (values: any) => {
  const request = `/bet/new-bet`;
  try {
    let response = await API.post(request, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      alert("Itens salvo com sucesso!!!");
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }

    throw new Error();
  } catch (error) {
    alert(`${error}`);
    return;
  }
};
