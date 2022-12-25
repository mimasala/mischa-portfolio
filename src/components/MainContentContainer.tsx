import {
  Box,
  Container,
  alpha,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
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
      <Box sx={{ flexGrow: "1", display:{xs:"none", sm:"flex"}}}>
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
          display: { xs: "flex", sm: "flex" },
          backgroundColor: { xs: "transparent", sm: alpha("#1f1f1f", 0.5) },
          // minHeight: "100vh",
          borderRadius: "1em",
          overflow: "hidden",
          position: "relative",
          boxShadow: {xs: "none", sm: "0px 0px 10px rgba(0,0,0,0.5)"},
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
