import { useEffect, useState } from "react";
import MusicControlCard from "./MusicControlCard";
import { songObject } from "./songObjects";

interface props {
  songs: songObject[];
}

const SongsList = ({ songs }: props) => {
  const [currentSong, setCurrentSong] = useState<number>(0);

  const handleNext = () => {
    currentSong < songs.length - 1
      ? setCurrentSong(currentSong + 1)
      : setCurrentSong(0);
  };
  const handlePrevious = () => {
    currentSong > 0
      ? setCurrentSong(currentSong - 1)
      : setCurrentSong(songs.length - 1);
  };

  useEffect(() => {
    console.log(currentSong);
  });
  return (
    <div>
      <MusicControlCard
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        song={songs[currentSong]}
      />
    </div>
  );
};

export default SongsList;
