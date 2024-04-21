import { useMutation } from "@tanstack/react-query";
import {
  createDevAPI,
  getDevsBySearch,
  LoginDevAPI,
  updateDevAPI,
} from "./api";
import { toast } from "react-toastify";
import {
  AddORUpdateDevDataTypes,
  LoginDevTypes,
  SignupDevTypes,
} from "../types/types";
import { useNavigate } from "react-router-dom";
import { SearchType } from "../components/Search";

export const useSearchedDev = () => {
  return useMutation({
    mutationFn: (data: SearchType) => getDevsBySearch(data),
    onSuccess: ({ data }) => data?.data,
    onSettled: (_, error) => {
      if (error) return toast.error(error?.response.data.message);
    },
  });
};

export const useCreateDev = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: SignupDevTypes) => createDevAPI(data),
    onSuccess: ({ data }) => {
      toast.success(data?.message);
      navigate("/login");
    },
    onSettled: (_, error) => {
      if (error) return toast.error(error?.response.data.message);
    },
  });
};

export const useLoginDev = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: LoginDevTypes) => LoginDevAPI(data),
    onSuccess: ({ data }) => {
      toast.success(data?.message);
      // Note to myself: Improved this, use cookies instead.
      localStorage.setItem("devs_accessToken", data?.accessToken);
      localStorage.setItem("devs_ID", data?.data?.id);
      navigate("/");
    },
    onSettled: (_, error) => {
      if (error) return toast.error(error?.response.data.message);
    },
  });
};

export const useUpdateDev = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: AddORUpdateDevDataTypes) => updateDevAPI(data),
    onSuccess: ({ data }) => {
      toast.success(data?.message);
      navigate("/");
    },
    onSettled: (_, error) => {
      if (error) return toast.error(error?.response.data.message);
    },
  });
};
