import { Hero } from "./Hero";

export interface IHeroService {
  fetchAllHeroes(): Promise<Hero[]>;
}
