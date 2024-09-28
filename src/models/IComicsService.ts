import { Comic } from "./Comic";

export interface IComicsService {
  fetchComicsByHeroId(heroId: number): Promise<Comic[]>;
}
