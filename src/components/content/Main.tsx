import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import SongsList from "../music/SongsList";
import songs from "../music/songObjects";
import SkillCard from "../SkillCard";
import { skills } from "../../service/SkillsObjects";

const Main = () => {
  return (
    <>
      <Stack sx={{ marginBottom: "1em", margin: "1em", marginTop: "-0.5em" }}>
        <Box
          sx={{
            display: "flex" ,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1em",
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <Box margin={3} sx={{ marginRight: "5em" }}>
              <Stack>
                <Typography variant="h2">{"Mischa Strauss"}</Typography>
                <Typography variant="subtitle1">{"Software Developer / Student"}</Typography>
              </Stack>
            </Box>
            <Box margin={3}>
              <SongsList songs={songs} />
            </Box>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "2em" }} />
        <Stack>
          <Typography variant="h4">
            <div id="about-me" />
            {"About Me"}
          </Typography>
          <Typography variant="body1">
            {"Hello! I am an application developer apprentice at "}
            <Link href="https://www.six-group.com/de/home.html">SIX</Link>
            {". I am currently in my second year of apprenticeship and attending the technical vocational school Vocational School "}
            <Link href="https://tbz.ch/">TBZ</Link>
            {" in Zurich. I am eager to share my skills and experiences through my developer portfolio."}
          </Typography>
          <Divider></Divider>
        </Stack>
        <Typography marginTop={"2em"} variant="h4">
          <div id="my-skills" />
          {"My Skills"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flex:"1", flexWrap:"wrap" }}>
          {skills.map((skill, index) => {
            return (
              <Box key={index} margin={{xs:"0.5em", sm:"1em", md:"1.5em", lg:"2em", xl:"2.5em"}} 
              // sx={{flex:"1 1 180px"}}
              >
                <SkillCard icon={skill.icon} title={skill.title} />
              </Box>
            );
          })}
        </Box>
      </Stack>
    </>
  );
};

export default Main;
