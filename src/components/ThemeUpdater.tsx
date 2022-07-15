import { FC, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  css,
  IconButton,
  MenuItem,
  Radio,
  Select,
  Typography,
  alpha,
  Alert,
  Link,
} from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { pink } from "@mui/material/colors";
import BlurrySmallContainerBox from "./BlurrySmallContainerBox";
import SnackbarInfo from "./SnackbarInfo";
import ThemeRadioButton from "./ThemeRadioButton";

const ThemeUpdater: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div
        css={css`
          min-height: 162.38px;
        `}
      />
    );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setTheme(val);
    if (val === "luna" || val === "camping") {
      setOpen(true);
    }else{
      setOpen(false);
    }
    // event.target.value === 
    // "luna" ? setOpen(true) 
    // : "camping" ? setOpen(true)
    // : setOpen(false)
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const controlProps = (item: string) => ({
    checked: resolvedTheme === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <BlurrySmallContainerBox>
        <ThemeRadioButton color="white" {...controlProps("light")}/>
        <ThemeRadioButton color="black" {...controlProps("dark")}/>
        <ThemeRadioButton color="#f67599" {...controlProps("luna")}/>
        <ThemeRadioButton color="#618c56" {...controlProps("camping")}/>
      </BlurrySmallContainerBox>

      <SnackbarInfo open={open} handleClose={handleClose}>
        <Alert severity="info">
          <Typography variant="body1">
            Theme Inspired by {theme} from{" "}
            <Link rel="noopener noreferrer" href="https://www.monkeytype.com">monkeytype</Link>
          </Typography>
        </Alert>
      </SnackbarInfo>
    </>
  );
};

export default ThemeUpdater;
