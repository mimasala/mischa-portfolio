import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "../../../public/images/songs/Lamp_Yume_Utsutsu.jpg";
import TimeSlider from "./TimeSlider";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import MusicModel, { initialMusicModel } from "./MusicModel";
import { Container } from "@mui/material";
import MusicPlayNext from "./MusicPlayNext";
import { songObject } from "./songObjects";

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
