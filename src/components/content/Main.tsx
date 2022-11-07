import { Box, Stack, Typography } from "@mui/material";

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
          <Stack>
            <Typography variant="h2">{"Mischa Strauss"}</Typography>
            <Typography variant="subtitle2">{"Software Developer / Student"}</Typography>
          </Stack>
        </Box>
        <Stack>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quas
          laborum iste dolores voluptatum quisquam animi voluptatem quaerat ea
          corporis ut, aperiam porro accusamus fuga, eaque reiciendis tenetur?
          Consequuntur, at!
        </Stack>
      </Stack>
    </>
  );
};

export default Main;
