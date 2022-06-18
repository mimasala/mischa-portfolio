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
import ThemeUpdater from "../ThemeUpdater";
import NavDrawerCollapse from "./NavDrawerCollapse";

const NavDrawer = () => {
  const theme = useTheme();
  return (
    <>
      <Toolbar>
        <Typography variant="h6">Max Muster</Typography>
      </Toolbar>
      <Box
        sx={{
          flexGrow: 1,
        }}>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "1em",
        }}
      >
        <ThemeUpdater />
      </Box>
    </>
  );
};

export default NavDrawer;
