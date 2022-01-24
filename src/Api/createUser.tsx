import { API } from "./api";

export const createUser = async (
  user: string,
  email: string,
  password: string
) => {
  const request = `/user/create`;
  const data = JSON.stringify({ name: user, email, password });
  try {
    let response = await API.post(request, data);
    if (response.status === 200) {
      alert("Usuário cadastrado com sucesso!");
      return true;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
  } catch (error) {
    alert(error);
    return false;
  }
};
