import { Hero } from "../Hero"

export type GetCharacters = {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: Hero[]
}