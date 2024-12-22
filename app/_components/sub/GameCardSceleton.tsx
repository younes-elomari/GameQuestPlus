const GameCardSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full h-[320px] rounded-md overflow-hidden border border-fuchsia-900 bg-gray-400 bg-opacity-20"></div>
      <div className="flex flex-col w-full gap-2 px-5 py-3 rounded-md overflow-hidden border border-fuchsia-900">
        <h1 className="w-full h-[24px] rounded-md bg-gray-400 bg-opacity-20"></h1>
        <h1 className="w-full h-[24px] rounded-md bg-gray-400 bg-opacity-20"></h1>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
