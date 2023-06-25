import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box sx={style}>
      <Box className="flex justify-center align-center direction-column overlay">
        <Box mb={2}>
          <Typography
            variant="h2"
            component="h1"
            fontSize="2.5rem"
            color="#fff"
          >
            A Place for the Genuises
          </Typography>
        </Box>
        <Button sx={{ color: "#fff" }} variant="outlined">
          Join great minds
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;

const style = {
  background: `url("/assets/hero.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",

  ".overlay": {
    height: "100%",
    background: "rgba(0, 0, 0, 0.65)",
  },
};
