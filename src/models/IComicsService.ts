import { Comic } from "./Comic";

export interface IComicsService {
  fetchHeroComicsById(heroId: number): Promise<Comic[]>;
}
