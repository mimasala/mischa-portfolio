import { Box, CircularProgress, IconButton } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";

interface props {
  onPrevious: () => void;
  onPlayPause: () => void;
  onNext: () => void;
  isPlaying: boolean;
  isLoading: boolean;
}

const MusicPlayNext = ({
  onPrevious,
  onNext,
  onPlayPause,
  isPlaying,
  isLoading,
}: props) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pl: 1,
          pb: 1,
        }}
      >
        <IconButton value="previous" onClick={onPrevious}>
          <SkipPreviousIcon color="primary" />
        </IconButton>
        <IconButton onClick={onPlayPause}>
          {/* {isLoading ? (
            <CircularProgress />
          ) : isPlaying ? (
            <PauseIcon
              values="pause"
              sx={{ height: 38, width: 38 }}
              color="primary"
            />
          ) : (
            <PlayArrowIcon
              values="play"
              sx={{ height: 38, width: 38 }}
              color="primary"
            />
          )} */}

          {isPlaying ? (
            <PauseIcon
              values="pause"
              sx={{ height: 38, width: 38 }}
              color="primary"
            />
          ) : (
            <PlayArrowIcon
              values="play"
              sx={{ height: 38, width: 38 }}
              color="primary"
            />
          )}
        </IconButton>
        <IconButton value="next" onClick={onNext}>
          <SkipNextIcon color="primary" />
        </IconButton>
      </Box>
    </div>
  );
};

export default MusicPlayNext;
