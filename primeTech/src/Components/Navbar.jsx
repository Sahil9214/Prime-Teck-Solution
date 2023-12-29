import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Images/PrimeTechLogo.png";
const Navbar = () => {
  return (
    <div className="mainNav">
      <Box className="nav">
        <Image src={logo} width={"60px"} />
        <Button className='navBtn' style={{ color: "#FFFFFF", backgroundColor: "#68D391" }}>
          {" "}
          <Link to="/chart"> DashBoard</Link>{" "}
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
