import "../../../public/images/songs/Lamp_Yume_Utsutsu.jpg";
import {
  Dispatch,
  SetStateAction,
} from "react";
import MusicModel from "./MusicModel";

const MusicHandler = (
  setMusic: Dispatch<SetStateAction<MusicModel>>,
  music: MusicModel,
  audioRef: any
) => ({
  handlePlayPause: (audioRef: any) => {
    const audio = audioRef.current;
    music.isPlaying ? audio.pause() : audio.play();
    setMusic({ ...music, isPlaying: !music.isPlaying });
  },
  handleSliderChange: (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    const audio = audioRef.current;
    audio.currentTime = value;
  },
  handleSliderUpdate: (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    setMusic({ ...music, currentTime: value });
    console.log(value);
  },
  handlePrevious: () => {},
  handleNext: () => {},
  handleTimeUpdate: () => {
    const audio = audioRef.current;
  },
});

export default MusicHandler;
