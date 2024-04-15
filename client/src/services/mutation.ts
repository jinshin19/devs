import { useMutation } from "@tanstack/react-query";
import { createDevAPI } from "./api";
import { toast } from "react-toastify";
import { SignupDevTypes } from "../types/types";
import { useNavigate } from "react-router-dom";

export const useCreateDev = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: SignupDevTypes) => createDevAPI(data),
    onSuccess: () => {
      toast.success("Sign in successfully");
      navigate("/");
    },
    onSettled: (_, error) => {
      if (error) return toast.error(error?.response.data.message);
    },
  });
};
