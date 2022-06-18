import { Box, Container, alpha, Paper } from "@mui/material";
import React from "react";
import Masonry from "@mui/lab/Masonry";
import Footer from "./Footer";

interface props {
  children: React.ReactNode;
}

const MainContentContainer = ({ children }: props) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          backdropFilter: "blur(5px)",
          backgroundColor: alpha("#1f1f1f", 0.5),
          height: "100vh",
          borderRadius: "1em",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        }}
      >
        <Container sx={{ marginTop: "1em" }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Container>
  );
};

export default MainContentContainer;
