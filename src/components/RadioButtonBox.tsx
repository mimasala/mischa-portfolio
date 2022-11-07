import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface props {
  name: string;
  children: any;
}

const RadioButtonBox = ({ name, children }: props) => {
  return (
    <>
      <Box sx={{}}>
        
        {children}
        <Typography variant="h6" sx={{ width: "fit-content" }}>
          {name}
        </Typography>
      </Box>
    </>
  );
};

export default RadioButtonBox;
