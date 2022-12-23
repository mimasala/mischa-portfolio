import Toolbar from "@mui/material/Toolbar";
import { Box, Typography, useTheme } from "@mui/material";
import Collapsible from "./Collapsible";

const NavDrawer = () => {
  return (
    <Box sx={{ width: 240 }}>
      <Toolbar>
        <Typography variant="h6">Mischa Strauss</Typography>
      </Toolbar>
      {/* <Toolbar>
        <BunnyModel />
      </Toolbar> */}
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Collapsible />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "1em",
        }}
      >
        {/* content here */}
      </Box>
    </Box>
  );
};

export default NavDrawer;
