import { Hero } from "./Hero";

export interface IMarvelService {
    fetchAllHeroes(): Promise<Hero[]>
}