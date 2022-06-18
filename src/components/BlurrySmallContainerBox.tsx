import { Box, alpha, Card, useTheme, Stack } from "@mui/material";
import React from "react";

const BlurrySmallContainerBox = ({ children }: any) => {
  const theme = useTheme();
  return (
    <div>
      <Card
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
          borderRadius: "0.5rem",
        }}
      >
        <Stack>{children}</Stack>
      </Card>
    </div>
  );
};

export default BlurrySmallContainerBox;
