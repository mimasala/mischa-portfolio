import { useTheme } from "next-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, themeKeys } from "../theme";
import { FC, useEffect, useState } from "react";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    if (theme) {
      if (theme in themeKeys) {
        setCurrentTheme(themeKeys[theme]);
      }
    }
  }, [resolvedTheme, theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
