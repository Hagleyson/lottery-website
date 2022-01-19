import { API } from "./api";

const loginUser = async () => {
  let request = `login`;
  let response = await API.get(request);
  return await response.data;
};
