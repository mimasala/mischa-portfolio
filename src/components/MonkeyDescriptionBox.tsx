import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface props {
  name: string;
  children: any;
}

const MonkeyDescriptionBox = ({ name, children }: props) => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "1em",
      }}
    >
      <Typography variant="h6" sx={{ width: "fit-content" }}>
        {name+"   "}
      </Typography>
      {children}
    </Box>
  );
};

export default MonkeyDescriptionBox;
