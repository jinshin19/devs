import { axiosInstance } from "../services/api";

export const isAuthenticated = async () => {
  const token = localStorage.getItem("devs_accessToken");
  const isNotExpired = await isTokenNotExpired(token!);
  return isNotExpired;
};

export const isTokenNotExpired = async (token: string) => {
  try {
    await axiosInstance.post("/devs/verify", { token });
    return true;
  } catch (error) {
    if (error) return false;
  }
  return;
};
