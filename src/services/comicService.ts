import { Comic } from "@/models/Comic";
import { heroInstance } from "./instances/heroInstance";
import md5 from "md5";
import { GetComics } from "@/models/response/getComics";
import { IComicsService } from "@/models/IComicsService";

export class ComicService implements IComicsService {
  private PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_API_KEY as string;
  private PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_API_KEY as string;

  private currentTime = Number(new Date());
  private hash = md5(this.currentTime + this.PRIVATE_KEY + this.PUBLIC_KEY);

  async fetchComicsByHeroId(heroId: number): Promise<Comic[]> {
    try {
      const endpoint = `/characters/${heroId}/comics?ts=${this.currentTime}&apikey=${this.PUBLIC_KEY}&hash=${this.hash}&limit=100`;
      const { data: response } = await heroInstance.get<GetComics>(endpoint);

      return response.data.results;
    } catch (error) {
      console.error(`Error fetching comics for hero with ID: ${heroId}`, error);
      throw new Error("Could not fetch comics for this hero");
    }
  }
}
