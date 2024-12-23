import useTrailers from "@/app/hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <div className="flex flex-col h-full w-full px-5 md:px-10 py-12">
      <video
        autoPlay
        poster={first.preview}
        className="w-full h-full object-cover"
        controls
        src={first.data[480]}
      />
    </div>
  ) : null;
};

export default GameTrailer;
