import axios from "axios";
import { destroySession, getSession } from "./helpers/storage/localStorage";

const API = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export { API };
