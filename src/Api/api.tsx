import axios from "axios";
import { destroySession } from "./helpers/storage/localStorage";

const API = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// // configurando o header (request)
// API.interceptors.request.use((config) => {
//   const sessionObject = getSession();
//   // if (!sessionObject) console.log("entrou");
//   config.headers.common.token = `${sessionObject}`;
//   return config;
// });

//para dar logout (response)
API.interceptors.response.use(
  (value) => {
    return Promise.resolve(value);
  },
  (error) => {
    const { isAxiosError = false, response = null } = error;
    if (isAxiosError && response && response.status === 403) {
      destroySession();
      return Promise.reject(error);
    }
    return response;
  }
);
export { API };
