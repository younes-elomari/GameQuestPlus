import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: undefined,
          parent_platforms: undefined,
          ordering: undefined,
          search: undefined,
          page: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
