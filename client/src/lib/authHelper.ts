import { axiosInstance } from "../services/api";

/** Note to myself:
 *  Be aware of this, token was set to 15min only, if the token expires then you / users will be redirected to login page
 */

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
