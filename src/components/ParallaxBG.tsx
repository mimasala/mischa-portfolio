import { Box } from "@mui/material";

export default function Scene() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: { sm: `calc(100% - ${240}px)`, xs: "100%" },
          ml: { sm: `${240}px` },
          height: "100vh",
          zIndex: -1,
        }}
      >
        {/* <Spline scene="https://prod.spline.design/PQRx7MTFYmLqC72C/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/VP-BUpeqTPwoXBdA/scene.splinecode" /> */}
      </Box>
    </>
  );
}
