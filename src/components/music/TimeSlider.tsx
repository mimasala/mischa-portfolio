import { Slider, useTheme } from "@mui/material";
import React, { useEffect } from "react";

interface props {
  onChange: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined
  currentTime: number | number[];
  duration:number;
}

const TimeSlider = ({onChange, currentTime, duration}:props) => {

  return (
    <div>
      <Slider
        aria-label="AudioPosition"
        defaultValue={0}
        color="primary"
        onChange={onChange}
        step={0.01}
        value={currentTime}
        max={duration}
      />
    </div>
  );
};

export default TimeSlider;
