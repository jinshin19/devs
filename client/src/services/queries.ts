import { useQuery } from "@tanstack/react-query"
import { getAllDevsAPI, getDevsByIDAPI } from "./api"

type IDTypes = {
    id: ( string | number | undefined )
}

export const useGetDevsQuery = () => {
    return useQuery(
        {
            queryKey: ['devs'],
            queryFn: getAllDevsAPI
        }
    )
}

export const useGetDevByIDQuery = ( id:IDTypes ) => {
    return useQuery(
        {
            queryKey: ['devs', id],
            queryFn: getDevsByIDAPI
        }
    )
}