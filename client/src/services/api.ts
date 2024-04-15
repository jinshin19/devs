import axios from "axios";
import { SignupDevTypes } from "../types/types";
const BASE_URL = "http://localhost:5000/api";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllDevsAPI = async () => {
  const { data } = await axiosInstance.get("/devs");
  return data;
};

export const getDevsByIDAPI = async (args: object) => {
  const { queryKey } = args;
  const { data } = await axiosInstance.get(`/devs/${queryKey[1]}`);
  return data;
};

export const createDevAPI = async (data: SignupDevTypes) =>
  await axiosInstance.post("/devs/signup", data);
