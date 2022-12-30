import { Box, CircularProgress, css, Grid, Skeleton } from "@mui/material";
import Footer from "../src/components/Footer";
import DefaultLayout from "../src/layouts/DefaultLayout";
import MainContentContainer from "../src/components/MainContentContainer";
import Navbar from "../src/components/navbar/Navbar";
import ParallaxBG from "../src/components/ParallaxBG";
import ThemeUpdater from "../src/components/ThemeUpdater";
import TitleScreen from "../src/components/TitleScreen";
import Masonry from "@mui/lab/Masonry";
import MediaControlCard from "../src/components/music/MusicControlCard";
import { NextPage } from "next";
import { songs } from "../src/components/music/songObjects";
import SongsList from "../src/components/music/SongsList";
import BunnyModel from "../src/components/BunnyModel";
import { useState } from "react";
import DefaultIcon from "../public/DefaultIcon";

const Home: NextPage = () => {
  return (
    <>
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"white", height:"20px", color:"black", zIndex:"214748367", position:"absolute", width:"100%" }}>
      {"!! UNFINISHED !!"}
    </Box>
      <DefaultLayout>
        <MainContentContainer>
          <Grid item>
            {/* <SongsList songs={songs} /> */}
          </Grid>
          <Grid item>
            <DefaultIcon />
          </Grid>
        </MainContentContainer>
      </DefaultLayout>
    </>
  );
};

export default Home;
