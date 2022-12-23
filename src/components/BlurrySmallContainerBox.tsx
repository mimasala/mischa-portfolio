import { alpha, Card, useTheme, Stack } from "@mui/material";
import React from "react";

interface Props {
  darkness: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9;
  children: React.ReactNode;
}

const BlurrySmallContainerBox = ({ darkness ,children }: Props) => {
  const theme = useTheme();
  return (
    <div>
      <Card
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, darkness),
          borderRadius: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <Stack sx={{marginLeft:"1rem"}}>{children}</Stack>
      </Card>
    </div>
  );
};

export default BlurrySmallContainerBox;
