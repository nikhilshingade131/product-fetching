import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { returnhook } from "./returnhooks";

const style = {
  Box: {
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    zIndex: 9,
  },

  Box1: {
    display: "flex",
    justifyContent: "space-between",
    Padding: "20px 30px",
    backgroundColor: "grey",
    alignItems: "center",
    height: "80px",
  },

  name: {
    marginLeft: "30px",
    fontFamily: "Inter",
    fontSize: { xs: "18px", sm: "20", md: "24px", lg: "24px" },
    fontWeight: 700,
  },

  ul: {
    marginRight: "30px",
    display: "flex",
    gap: "20px",
    listStyleType: "none",
  },

  li: {
    cursor: "pointer",
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  },
};

class Navbar extends Component {
  logout = () => {
    localStorage.removeItem("token");
    this.props.navigate("/");
  };
  render() {
    return (
      <Box sx={style.Box}>
        <Box sx={style.Box1}>
          <Box sx={style.name}>ShopEasy.com</Box>
          <ul style={style.ul}>
            <Link to="/navbar/home"><li style={style.li}>Home</li></Link>
            <Link to="/navbar/product"><li style={style.li}>Products</li>
            </Link>
            {/* <Link to = '/navbar/product/1' > <li style={style.li}>ProductInfo</li></Link> */}
            <Button onClick={this.logout} sx={style.btn}> Logout </Button>
          </ul>
        </Box>
      </Box>
    );
  }
}

export default returnhook(Navbar);
