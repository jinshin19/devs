import axios from 'axios'
const BASE_URL = "http://localhost:5000/api"
const axiosInstance = axios.create({
    baseURL: BASE_URL
})

type IDTypes = {
    id: ( string | number | undefined )
}

export const getAllDevsAPI = async () => {
    const { data } = await axiosInstance.get("/devs")
    return data
}

export const getDevsByIDAPI = async ( args: object ) => {
    const { queryKey }: {} = args;
    console.log(queryKey)
    const { data } = await axiosInstance.get(`/devs/${queryKey[1]}`)
    return data
}

export const createDevAPI = async (data) => await axiosInstance.post('/devs', data);