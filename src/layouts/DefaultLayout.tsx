import { Box } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import ParallaxBG from "../components/ParallaxBG";

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <ParallaxBG />
      <Box
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default DefaultLayout;
