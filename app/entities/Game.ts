import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform }[];
  platforms: {
    platform: { id: number; name: string; image_background: string };
    requirements: { minimum: string; recomended: string };
  }[];
  metacritic: number;
  rating_top: number;
  released: string;
  reviews_count: number;
  developers: {
    id: number;
    image_background: string;
    name: string;
    slug: string;
  }[];
  updated: string;
}
