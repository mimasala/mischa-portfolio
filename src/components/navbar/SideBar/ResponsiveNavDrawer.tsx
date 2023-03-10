import { Box, Drawer, useTheme } from "@mui/material";
import NavDrawer from "./NavDrawer";

interface props {
  mobileOpen: boolean;
  handleDrawerToggle: (open: boolean) => void;
}

const ResponsiveNavDrawer = ({ mobileOpen, handleDrawerToggle }: props) => {

  return (
    <Box
      sx={{
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <NavDrawer />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          border: "none",
        }}
      >
        <NavDrawer />
      </Drawer>
    </Box>
  );
};

export default ResponsiveNavDrawer;
