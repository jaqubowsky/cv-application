import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import "@fontsource/karla";

const theme = {
  colors: {
    header: "#252525",
    fontWhite: "#FFFFFF",
    fontDefault: "#333333",
    mainBg: "#CCCCCC",
    wrapperBg: "#EEEEEE",
    wrapperShadow: `#00000059 0px 5px 15px  `,
  },
  font: {
    karla: "karla, sans-serif",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
