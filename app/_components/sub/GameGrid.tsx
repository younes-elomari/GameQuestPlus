"use client";
import React, { useEffect } from "react";
import GameCard from "./GameCard";
import useGames from "@/app/hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import Spinner from "./Spinner";
import toast, { Toaster } from "react-hot-toast";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    if (error?.message) {
      toast.error(error.message);
    }
  }, [error?.message]);

  return (
    <>
      <div className="w-full h-full space-y-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} index={index} />
              ))}
            </React.Fragment>
          ))}
        </div>
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            className="mt-14 py-2 px-8 button-primary text-center font-semibold text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            More Games {isFetchingNextPage && <Spinner />}
          </button>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default GameGrid;
