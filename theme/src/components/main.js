import React from "react";
import { Box } from "theme-ui";

const Main = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        width: ["100%", null, null, "calc(100% - 300px)"],
        marginLeft: [0, null, null, 300],
        marginTop: [64, null, null, 0]
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
