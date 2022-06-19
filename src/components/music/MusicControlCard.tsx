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
import { MutableRefObject, useEffect, useRef, useState } from "react";
import MusicModel, { initialMusicModel } from "./MusicModel";
import { Container } from "@mui/material";
import MusicPlayNext from "./MusicPlayNext";
import { songObject } from "./songObjects";
import MusicHandler from "./MusicHandler";

interface props {
  song: songObject;
  handleNext: () => void;
  handlePrevious: () => void;
}

export default function MediaControlCard({ song, handleNext, handlePrevious }: props) {
  const audioRef: any = useRef<HTMLAudioElement>();

  const [music, setMusic] = useState<MusicModel>(initialMusicModel);
  const musicHandler = MusicHandler(setMusic, music, audioRef);

  const handlePlayPause = () => {
    musicHandler.handlePlayPause(audioRef);
  };
  const handleSliderChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    musicHandler.handleSliderChange(event, value, activeThumb);
  };
  const handleTimeUpdate:any = () => {
    musicHandler.handleTimeUpdate();
  };

  const handleNextCard = () => {
    handleNext()
    setMusic(initialMusicModel);
  }
  const handlePreviousCard = () => {
    handlePrevious()
    setMusic(initialMusicModel);
  }

  return (
    <Card
      sx={{ display: "flex", borderRadius: "0.5em", width: "max-content" }}
      elevation={3}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <audio
          ref={audioRef}
          src={song.src}
          onLoadedData={(e) => {
            setMusic({
              ...music,
              duration: +e.currentTarget.duration.toFixed(2),
            });
          }}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setMusic({ ...music, isPlaying: false })}
        />
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {song.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {song.artist}
          </Typography>
        </CardContent>
        <MusicPlayNext
          onPrevious={handlePreviousCard}
          onNext={handleNextCard}
          onPlayPause={handlePlayPause}
          isPlaying={music.isPlaying}
        />
        <Container>
          <TimeSlider
            onChange={handleSliderChange}
            currentTime ={music.currentTime}
            duration={song.duration}
          />
        </Container>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 , display:{xs:"none",md:"block"}}}
        image={song.image.src}
        alt={song.image.alt}
      />
    </Card>
  );
}
