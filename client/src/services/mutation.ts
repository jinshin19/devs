import { useMutation } from "@tanstack/react-query";
import { createDevAPI, LoginDevAPI } from "./api";
import { toast } from "react-toastify";
import { LoginDevTypes, SignupDevTypes } from "../types/types";
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
      navigate("/");
    },
    onSettled: (_, error) => {
      if (error) return toast.error(error?.response.data.message);
    },
  });
};
