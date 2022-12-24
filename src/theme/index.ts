import { PaletteOptions, createTheme, css, Theme } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

const darkDefaultTypographyPalette = {
  fontFamily: ["Roboto Mono", "monospace"].join(","),
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
  },
};
const defaultTransitionSettings = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
  },
  easing: {
    // This is the most common easing curve.
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
};
const defaultOverrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        transition: 'all 0.3s linear',
      },
    },
  },
}
export const lightTheme = createTheme({
  palette: {
    primary: { main: "#000" },
    secondary: { main: "#000" },
    text: { primary: "#000" },
    mode: "light",
  },
  typography: darkDefaultTypographyPalette,
  transitions: defaultTransitionSettings,
});
export const darkTheme: Theme = createTheme({
  palette: {
    primary: { main: "#fff" },
    secondary: { main: "#fff" },
    mode: "dark",
  },
  typography: darkDefaultTypographyPalette,
  transitions: defaultTransitionSettings,
});
export const lunaTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f67599" }, //icon color
    secondary: { main: "#5a3a7e" },
    background: { default: "#221c35", paper: "#221c35" },
    text: { primary: "#ffe3eb" },
  },
  typography: darkDefaultTypographyPalette,
  transitions: defaultTransitionSettings,
});
export const campingTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#618c56" }, //icon color
    secondary: { main: "#3c403b" },
    background: { default: "#faf1e4", paper: "#faf1e4" },
    text: { primary: "#000000", secondary: "#c2b8aa" },
  },
  typography: darkDefaultTypographyPalette,
  transitions: defaultTransitionSettings,
});

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#e2b714" }, //icon color
    secondary: { main: "#646669" },
    background: { default: "#323437", paper: "#323437" },
    text: { primary: "#d1d0c5", secondary: "#e2b714" },
  },
  typography: darkDefaultTypographyPalette,
  transitions: defaultTransitionSettings,
});

export const themeKeys: { [key: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
  luna: lunaTheme,
  camping: campingTheme,
  default: defaultTheme,
};
