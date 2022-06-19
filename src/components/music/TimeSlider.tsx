import { Slider, useTheme } from "@mui/material";
import React, { useEffect } from "react";

interface props {
  onChange: ((event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) => void) | undefined
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
        step={0.01}
        value={currentTime}
        max={duration}
        onChangeCommitted={onChange}
      />
    </div>
  );
};

export default TimeSlider;
