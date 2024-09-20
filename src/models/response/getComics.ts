import { AxiosResponse } from "axios";
import { Comic } from "../Comic";

export type GetComics = AxiosResponse<{
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}>;
