import { AppBar } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{ background: "transparent !important", boxShadow: "none", color:" black" }}
        position="static"
      >
        test
      </AppBar>
    </>
  );
};

export default Navbar;
