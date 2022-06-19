import { css } from "@mui/material";
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

const Home: NextPage = () => {
  return (
    <>
      <DefaultLayout>
      <MainContentContainer>
          <SongsList songs={songs}/>
      </MainContentContainer>
      </DefaultLayout>
    </>
  );
};

export default Home;