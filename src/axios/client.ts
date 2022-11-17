import axios from "axios";
import { API_URL } from "./../constants/constants";

const config = {
  baseURL: API_URL,
};
export const client = axios.create(config);
