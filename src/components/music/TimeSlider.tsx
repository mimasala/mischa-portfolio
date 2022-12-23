import { Slider } from "@mui/material";
import React from "react";

interface props {
  onChange: ((event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) => void) | undefined
  currentTime: number | number[];
  duration:number;
  handleSliderUpdate: (event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) => void;
}

const TimeSlider = ({onChange, currentTime, duration, handleSliderUpdate}:props) => {

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
        onChange={handleSliderUpdate}
      />
    </div>
  );
};

export default TimeSlider;
