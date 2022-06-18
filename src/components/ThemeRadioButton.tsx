import { useTheme } from "@emotion/react";
import { Radio } from "@mui/material";
import React from "react";

interface props {
    color: string;
}

const ThemeRadioButton = ({color, ...props}:props) => {
  const theme = useTheme()
  return (
    <>
      <Radio
        {...props}
        sx={{
          color: {color},
          "&.Mui-checked": {
            color: {color},
          },
        }}
      />
    </>
  );
};

export default ThemeRadioButton;
