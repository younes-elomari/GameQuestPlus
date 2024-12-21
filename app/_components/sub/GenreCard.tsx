import Genre from "@/app/entities/Genre";

interface Props {
  genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <div className="w-[60px] h-[60px] border border-gray-700">
        <img
          src={genre.image_background}
          alt={genre.name}
          width={60}
          height={60}
          className="w-full h-full object-cover"
        />
      </div>
      <h6 className="text-[18px] font-semibold cursor-pointer hover:text-fuchsia-600 transition">
        {genre.name}
      </h6>
    </div>
  );
};

export default GenreCard;
