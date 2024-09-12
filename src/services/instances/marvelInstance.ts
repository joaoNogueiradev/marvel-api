import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_DEFAULT_URL as string

export const marvelInstance = axios.create({
    baseURL:API_URL
})