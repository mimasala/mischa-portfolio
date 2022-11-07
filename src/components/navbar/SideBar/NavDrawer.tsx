import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography, useTheme } from "@mui/material";
import ThemeUpdater from "../../ThemeUpdater";
import Collapsible from "./Collapsible";
import BunnyModel from "../../BunnyModel";

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
