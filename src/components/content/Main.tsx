import { Box, Container, Divider, Grid, Link, Stack, Toolbar, Typography } from "@mui/material";
import SongsList from "../music/SongsList";
import songs from "../music/songObjects";
import SkillCard from "../SkillCard";

const Main = () => {
  return (
    <>
      <Stack sx={{marginBottom:"1em", margin:"1em", marginTop:"-0.5em"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1em",
          }}
        >
          <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            <Box margin={3} sx={{marginRight:"5em"}}>
              <Stack>
                <Typography variant="h2">{"Mischa Strauss"}</Typography>
                <Typography variant="subtitle1">{"Software Developer / Student"}</Typography>
              </Stack>
            </Box>
            <Box margin={3}>
              <SongsList songs={songs}/>
            </Box>
          </Box>
        </Box>
        <Divider sx={{marginBottom:"2em"}}/>
        <Stack>
          <Typography variant="h4">
            <div id="about-me"/>
            {"About Me"}
          </Typography>
          <Typography variant="body1">
            {"Hello! I am an application developer apprentice at "}
            <Link href="https://www.six-group.com/de/home.html">SIX</Link>
            {". A financial services company that operates the Swiss stock exchange and provides trading, settlement, clearing, and financial information services. I am currently in my second year of apprenticeship and attending the technical vocational school Vocational School "}
            <Link href="https://tbz.ch/">TBZ</Link>
            {" in Zurich. I am excited to continue learning and growing as a developer, and I am eager to share my skills and experiences through my developer portfolio. Thank you for visiting my portfolio and I hope you enjoy learning more about my work and accomplishments."}
          </Typography>
        </Stack>
        <Stack sx={{marginTop:"2em"}}>
          <Typography variant="h4" marginBottom={"0.2em"}>
            <div id="my-skills"/>
            {"My Skills"}
          </Typography>
        </Stack>
        <Grid container spacing={4} columns={12} width={"80%"}>
            <Grid item>
              <SkillCard title="Docker" icon="../images/songs/lampBARABARABA.webp"/>
            </Grid>
          </Grid>
      </Stack>
    </>
  );
};

export default Main;
