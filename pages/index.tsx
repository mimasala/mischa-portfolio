import { Box, Grid } from "@mui/material";
import DefaultLayout from "../src/layouts/DefaultLayout";
import MainContentContainer from "../src/components/MainContentContainer";
import { NextPage } from "next";
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
            <DefaultIcon />
          </Grid>
        </MainContentContainer>
      </DefaultLayout>
    </>
  );
};

export default Home;
