import { AxiosResponse } from "axios"
import { Hero } from "../Hero"

export type GetCharacters = AxiosResponse<{
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: Hero[]
}>
