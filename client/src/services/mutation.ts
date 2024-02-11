import { useMutation } from "@tanstack/react-query"
import { createDevAPI } from "./api"
import { toast } from 'react-toastify'

export const useCreateDev = () => {

    return useMutation(
        {
            mutationFn: ( data ) => createDevAPI( data ),
            onSuccess: () => toast.success("Sign in successfully"),
            onSettled: ( _, data, variables ) => {
                if ( error ) return console.log( error )
            }
        }
    )

}
