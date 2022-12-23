import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../../../public/images/songs/Lamp_Yume_Utsutsu.jpg";
import TimeSlider from "./TimeSlider";
import { useRef, useState } from "react";
import MusicModel, { initialMusicModel } from "./MusicModel";
import { Container, Grid } from "@mui/material";
import MusicPlayNext from "./MusicPlayNext";
import { songObject } from "./songObjects";
import MusicHandler from "./MusicHandler";
import { ThemeProvider } from "next-themes";

interface props {
  song: songObject;
  handleNext: () => void;
  handlePrevious: () => void;
}

export default function MediaControlCard({
  song,
  handleNext,
  handlePrevious,
}: props) {
  const audioRef: any = useRef<HTMLAudioElement>();

  const [music, setMusic] = useState<MusicModel>(initialMusicModel);
  const musicHandler = MusicHandler(setMusic, music, audioRef);

  const handlePlayPause = () => {
    musicHandler.handlePlayPause(audioRef);
  };
  const handleSliderChange = (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    musicHandler.handleSliderChange(event, value);
  };

  const handleNextCard = () => {
    handleNext();
    setMusic(initialMusicModel);
  };
  const handlePreviousCard = () => {
    handlePrevious();
    setMusic(initialMusicModel);
  };
  const handleSliderUpdate = (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    musicHandler.handleSliderUpdate(event, value);
  };

  return (
    <ThemeProvider>
      <Card
        sx={{
          display: "flex",
          borderRadius: "0.5em",
          width: { xs: 170, md: 300 },
          height: { xs: 180 },
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={2}
      >
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <audio
            ref={audioRef}
            src={song.src}
            onLoadedData={(e) => {
              setMusic({
                ...music,
                isLoading: false,
                duration: +e.currentTarget.duration.toFixed(2),
              });
            }}
            onTimeUpdate={(e) => {
              setMusic({
                ...music,
                currentTime: +e.currentTarget.currentTime.toFixed(2),
              });
            }}
            onEnded={() => setMusic({ ...music, isPlaying: false })}
          />
          <CardContent sx={{ flex: "1 0", alignItems:"center", justifyContent:"center" }}>

            <Typography variant="h6" fontWeight={"bold"}>
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
            isLoading={music.isLoading}
          />
          <Container sx={{justifyContent:"center", display:"flex 1"}}>
            <TimeSlider
              onChange={handleSliderChange}
              currentTime={music.currentTime}
              duration={song.duration}
              handleSliderUpdate={handleSliderUpdate}
            />
          </Container>
        </Grid>
        <CardMedia
          component="img"
          sx={{ height: 180, width:130, display: { xs: "none", md: "block" } }}
          image={song.image.src}
          alt={song.image.alt}
        />
      </Card>
    </ThemeProvider>
  );
}
