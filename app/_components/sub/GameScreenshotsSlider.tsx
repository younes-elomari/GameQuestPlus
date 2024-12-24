"use client";
import Game from "@/app/entities/Game";
import useScreenshots from "@/app/hooks/useScreenShots";
import React, { useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";

interface Props {
  game: Game;
}

const GameScreenshotsSlider = ({ game }: Props) => {
  const { data: scrennshots } = useScreenshots(game.id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!scrennshots) return null;

  const slides = scrennshots.results;

  const prevSlide = () => {
    const index = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="h-[620px] w-full px-5 md:px-10 py-12 relative">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>

      <div
        onClick={prevSlide}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-gray-600 text-green-100 cursor-pointer"
      >
        <BsChevronCompactLeft size={25} />
      </div>
      <div
        onClick={nextSlide}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-gray-600 text-green-100 cursor-pointer"
      >
        <BsChevronCompactRight size={25} />
      </div>
      <div className="flex mt-4 justify-center p-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="text-2xl cursor-pointer mx-1"
          >
            {index === currentIndex ? <RxDotFilled /> : <RxDot />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameScreenshotsSlider;
