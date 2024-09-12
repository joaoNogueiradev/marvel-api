import { Hero } from "@/models/Hero";
import { IMarvelService } from "@/models/IMarvelService";
import { marvelInstance } from "./instances/marvelInstance";
import md5 from "md5";
import { AxiosResponse } from "axios";
import { GetCharacters } from "@/models/response/getCharacters";

type GetCharactersRequest = AxiosResponse<GetCharacters>;

export class MarvelService implements IMarvelService {
  private PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_API_KEY as string;
  private PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_API_KEY as string;

  private currentTime = Number(new Date());
  private hash = md5(this.currentTime + this.PRIVATE_KEY + this.PUBLIC_KEY);

  async fetchAllHeroes(): Promise<Hero[]> {
    try {
      const endpoint = `/characters?ts=${this.currentTime}&apikey=${this.PUBLIC_KEY}&hash=${this.hash}&limit=100`;
      const { data: response } = await marvelInstance.get<GetCharactersRequest>(
        endpoint
      );

      return response.data.results;
    } catch (error) {
      console.error("Error fetching heroes", error);
      throw new Error("Could not fetch all heroes");
    }
  }
}
