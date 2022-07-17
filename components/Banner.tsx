import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "../typings";
import { baseUrl } from "../constants/movieImgUrl";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movieBanner, setMovieBanner] = useState<Movie | null>(null);

  useEffect(() => {
    const RandomMovie =
      netflixOriginals[
        Math.round(Math.random() * netflixOriginals.length + 1) - 1 //Generating all possible random number in Array
      ];
    setMovieBanner(RandomMovie);
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 ">
      <div className="absolute -z-10 top-0 left-0 h-[95vh] w-screen ">
        <Image
          src={`${baseUrl}${
            movieBanner?.backdrop_path || movieBanner?.poster_path
          }`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="font-bold text-2xl lg:text-7xl md:text-4xl">
        {movieBanner?.title || movieBanner?.original_title}
      </h1>
      <p className="max-w-xs text-shadow-xl text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl ">
        {movieBanner?.overview}
      </p>

      <div className=" flex space-x-3 ">
        <button className="bannerButton bg-white text-black ">
          <FaPlay className="h-4 w-4 text-black h7 md:w-7 " /> Play
        </button>
        <button className="bannerButton bg-[gray]/70 ">
          More Info
          <InformationCircleIcon className=" h-5 w-5 md:h-8 md:w-8 " />
        </button>
      </div>
    </div>
  );
};

export default Banner;
