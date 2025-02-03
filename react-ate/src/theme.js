import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primaryBlue: {
          100: "#d0d4d8",
          200: "#a2aab1",
          300: "#737f8a",
          400: "#455563",
          500: "#162a3c",
          600: "#122230",
          700: "#0d1924",
          800: "#091118",
          900: "#04080c",
        },

        primaryGreen: {
          100: "#d6f0da",
          200: "#ade1b5",
          300: "#85d38f",
          400: "#5cc46a",
          500: "#33b545",
          600: "#299137",
          700: "#1f6d29",
          800: "#14481c",
          900: "#0a240e",
        },

        primaryOrange: {
          100: "#fff2de",
          200: "#ffe5bd",
          300: "#ffd99c",
          400: "#ffcc7b",
          500: "#ffbf5a",
          600: "#cc9948",
          700: "#997336",
          800: "#664c24",
          900: "#332612",
        },

        greyAccent: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
      }
    : {
        primaryBlue: {
          100: "#04080c",
          200: "#091118",
          300: "#0d1924",
          400: "#122230",
          500: "#162a3c",
          600: "#455563",
          700: "#737f8a",
          800: "#a2aab1",
          900: "#d0d4d8",
        },

        primaryGreen: {
          100: "#0a240e",
          200: "#14481c",
          300: "#1f6d29",
          400: "#299137",
          500: "#33b545",
          600: "#5cc46a",
          700: "#85d38f",
          800: "#ade1b5",
          900: "#d6f0da",
        },

        primaryOrange: {
          100: "#332612",
          200: "#664c24",
          300: "#997336",
          400: "#cc9948",
          500: "#ffbf5a",
          600: "#ffcc7b",
          700: "#ffd99c",
          800: "#ffe5bd",
          900: "#fff2de",
        },

        greyAccent: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primaryGreen[500],
            },
            secondary: {
              main: colors.primaryBlue[500],
            },
            neutral: {
              dark: colors.greyAccent[700],
              main: colors.greyAccent[500],
              light: colors.greyAccent[100],
            },
            background: {
              default: colors.greyAccent[200],
            },
          }
        : {
            primary: {
              main: colors.primaryGreen[100],
            },
            secondary: {
              main: colors.primaryBlue[100],
            },
            neutral: {
              main: colors.greyAccent[500],
              dark: colors.greyAccent[500],
            },
            background: {
              default: colors.greyAccent[900],
            },
          }),
    },
    typography: {
      fontFamily: ["Montserrat", "serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
