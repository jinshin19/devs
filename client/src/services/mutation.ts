import { useMutation } from "@tanstack/react-query";
import { createDevAPI, LoginDevAPI, updateDevAPI } from "./api";
import { toast } from "react-toastify";
import {
  AddORUpdateDevDataTypes,
  LoginDevTypes,
  SignupDevTypes,
} from "../types/types";
import { useNavigate } from "react-router-dom";

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
      localStorage.setItem("temporaryStorage_ID", data.data?.id);
      localStorage.setItem("temporaryStorage_USERNAME", data.data?.username);
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
