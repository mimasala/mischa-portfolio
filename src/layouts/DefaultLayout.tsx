import React from "react";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import ParallaxBG from "../components/ParallaxBG";
import TitleScreen from "../components/TitleScreen";

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <TitleScreen />
      <ParallaxBG />
      <Box
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default DefaultLayout;
