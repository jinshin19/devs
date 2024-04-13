import { useQuery } from "@tanstack/react-query";
import { getAllDevsAPI, getDevsByIDAPI } from "./api";

export const useGetDevsQuery = () => {
  return useQuery({
    queryKey: ["devs"],
    queryFn: getAllDevsAPI,
  });
};

export const useGetDevByIDQuery = (id: string) => {
  return useQuery({
    queryKey: ["devs", id],
    queryFn: getDevsByIDAPI,
  });
};
