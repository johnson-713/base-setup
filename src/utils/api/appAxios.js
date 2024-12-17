import { getHostUrl } from "@/api/config";
import axios from "axios";

const appAxios = axios.create({
  baseURL: getHostUrl(),
  timeout: 30000,
  responseType: "json",
});

export default appAxios;
