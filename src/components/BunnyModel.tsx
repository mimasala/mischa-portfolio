import Spline from "@splinetool/react-spline";
import { Box } from "@mui/material";

interface props {
  onLoad: (isLoading: boolean) => void;
}

export default function Scene({ onLoad }: props) {
  return (
    <>
      <Box
        sx={{
          marginBottom:"1em",
        }}
      >
        <Spline onLoad={()=> {
          onLoad(true)
          console.log("loaded")
          
        }} scene="https://prod.spline.design/VP-BUpeqTPwoXBdA/scene.splinecode" />
      </Box>
    </>
  );
}
