import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
      <nav style={style}>
        <Box>
          <img src="" alt="logo" />
        </Box>
        <ul className="flex align-center"  style={{gap:"1rem", color:"#fff"}}>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Register</Link></li>
          <li><Link to="#">List</Link></li>

        </ul>
      </nav>
  );
};

export default Navbar;

const style = {
  display: "flex",
  justifyContent:"space-between",
  alignItems: "center",
  padding: "12px 75px",
  background:"#000",
  position: "sticky",
  top: 0

}