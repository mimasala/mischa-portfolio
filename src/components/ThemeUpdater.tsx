import { useEffect, useState } from "react";
import {
  Box,
  css,
  Typography,
  Alert,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import { useTheme } from "next-themes";
import BlurrySmallContainerBox from "./BlurrySmallContainerBox";
import SnackbarInfo from "./SnackbarInfo";
import ThemeRadioButton from "./ThemeRadioButton";

const ThemeUpdater = () => {
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
    if (val === "luna" || val === "camping" || val === "default") {
      setOpen(true);
    } else {
      setOpen(false);
    }
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

  const testNamelol = () => {}

  return (
    <Stack width={1}>
      <Box>
        <BlurrySmallContainerBox darkness={0.3}>
          <ThemeRadioButton label="Light" color="white" {...controlProps("light")} />
          <ThemeRadioButton label="Dark" color="black" {...controlProps("dark")} />
        </BlurrySmallContainerBox>
      </Box>
      <Divider orientation="horizontal" />
      <Typography variant="body1" mt={1}>
        MonkeyType Themes:
      </Typography>
      <BlurrySmallContainerBox darkness={0.3}>
        <ThemeRadioButton label="default" color="#e2b714" {...controlProps("default")} />
        <ThemeRadioButton label="luna" color="#f67599" {...controlProps("luna")} />
        <ThemeRadioButton label="camping" color="#618c56" {...controlProps("camping")} />
      </BlurrySmallContainerBox>
      

      <SnackbarInfo open={open} handleClose={handleClose}>
        <Alert severity="info">
          <Typography variant="body1">
            Theme Inspired by {theme} from{" "}
            <Link rel="noopener noreferrer" href="https://www.monkeytype.com">
              monkeytype
            </Link>
          </Typography>
        </Alert>
      </SnackbarInfo>
    </Stack>
  );
};

export default ThemeUpdater;
