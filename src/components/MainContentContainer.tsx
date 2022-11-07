import {
  Box,
  Container,
  alpha,
  Paper,
  Grid,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import Footer from "./Footer";
import BunnyModel from "./BunnyModel";
import Main from "./content/Main";

interface props {
  children: React.ReactNode;
}

const MainContentContainer = ({ children }: props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box sx={{ flexGrow: "1" }}>
        <BunnyModel onLoad={setIsLoaded} />
        {!isLoaded && (
          <Box
            sx={{
              width: "640px",
              height: "360px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          backdropFilter: "blur(5px)",
          backgroundColor: alpha("#1f1f1f", 0.5),
          // minHeight: "100vh",
          borderRadius: "1em",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
          flexGrow: "1",
          width: "100%",
        }}
      >
        <Container
          sx={{
            marginTop: "1em",
            justifyContent: { xs: "center" },
            display: "flex",
          }}
        >
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Main/>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Container>
  );
};

export default MainContentContainer;
