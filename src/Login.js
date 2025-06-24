import React, { Component } from "react";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import img from "./img.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img5 from "./Group.svg";
import img4 from "./Vector.svg";
import { returnhook } from "./returnhooks";

const style = {
  Box1: {
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    alignItems: "center",
    gap: { xs: "1px", sm: "1px", md: "120px", lg: "120px" },
    height: { xs: "100%", sm: "100%", md: "670px", lg: "670px" },
  },

  Box2: {},

  img: {
    width: { xs: "150px", sm: "200px", md: "400px", lg: "400px" },
    height: { xs: "150px", sm: "200px", md: "400px", lg: "400px" },
    margin: {
      xs: "20px 0px 0px 0px",
      sm: "40px 0px 0px 0px",
      md: "95px 125px 95px 155px",
      lg: "95px 125px 95px 155px",
    },
  },

  Box3: {
    backgroundColor: "#FFFFFF",
    margin: {
      xs: "20px 20px 80px 20px",
      sm: "20px 20px 80px 20px",
      md: "25px 35px 25px 15px",
      lg: "25px 35px 25px 15px",
    },
    borderRadius: "8px",
    width: { xs: "350px", sm: "500px", md: "500px", lg: "500px" },
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "normal", md: "normal", lg: "normal" },
    padding:"10px"
  },

  Box4: {
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    marginBottom:"15px"
  },

  text1: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "30px",
    color: "#2F2F2F",
    lineHeight: "25px",
  },

  text2: {
    fontFamily: "Poppins",
    fontWeight: 900,
    fontSize: "40px",
    color: "#6358DC",
  },

  Box5: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "15px",
  },

  Box6: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 15px #0000001C",
    height: "45px",
    width: { xs: "300px", sm: "400px", md: "400px", lg: "400px" },
    gap: "10px",
    borderRadius: "8px",
  },

  img2: {
    height: "25px",
    width: "25px",
  },
  Box7: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    width: { xs: "300px", sm: "400px", md: "400px", lg: "400px" },
  },
  or: {
    margin: "0px 20px",
    fontFamily: "#BFBFBF",
    fontSize: "14px",
  },

  line: {
    height: "1px",
    width: "320px",
    backgroundColor: "#BFBFBF",
  },
  font: {
    fontFamily: "Poppins",
    fontSize: "16px",
  },

  input: {
    height: "50px",
    width: { xs: "300px", sm: "400px", md: "400px", lg: "400px" },
    backgroundColor: "#ECECEC",
    borderRadius: "8px",
    "& .MuiInput-underline:before": { borderBottom: "none" },
    "& .MuiInputBase-input": {
      fontFamily: "Poppins",
      fontWeight: 700,
    },
    display: "flex",
    justifyContent: "center",
    fontFamily: "Poppins",
    fontWeight: 700,
  },

  rem: {
    display: "flex",
    justifyContent: "space-between",
    width: { xs: "300px", sm: "400px", md: "400px", lg: "400px" },
    alignItems: "center",
    height: "30px",
  },
  rem1: {
    display: "flex",
    alignItems: "center",
  },

  button: {
    height: "45px",
    width: { xs: "300px", sm: "400px", md: "400px", lg: "400px" },
    color: "white",
    backgroundColor: "#6358DC",
    fontFamily: "Poppins",
    fontSize: "14px",
    textTransform: "none",
    borderRadius: "5px",
  },
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    this.check()
  }


  check = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setTimeout(() => {
        this.props.navigate("/navbar/home");
      }, 0);
    }
  }

  Login = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.email,
          password: this.state.password,
          expiresInMins: 30,
        }),
      })

      const data = await response.json();
      console.log("fffooooooo", data.accessToken);
      console.log("first,", response);

      if (response.ok) {
        console.log("Login Successful:", data);
        localStorage.setItem("token", data.accessToken);
        this.props.navigate("/navbar/home");
      } else {
        console.error("Login Failed:", data.message);
        alert("Invalid credentials");
        this.setState({ email: "", password: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  render() {
    return (
      <>
        <Box sx={style.Box1}>
          <Box sx={style.Box2}>
            <Box component="img" src={img} alt="img" sx={style.img} />
          </Box>
          <Box sx={style.Box3}>
            <Box sx={style.Box4}>
              <Typography sx={style.text1}>Welcome to</Typography>
              <Typography sx={style.text2}>ShopZone</Typography>
            </Box>
            <Box sx={style.Box5}>
              <Box sx={style.Box6}>
                <Box component="img" src={img2} alt="img" sx={style.img2} />
                <Typography variant="p" sx={style.font}>
                  Login with Google
                </Typography>
              </Box>
              <Box sx={style.Box6}>
                <Box component="img" src={img3} alt="img" sx={style.img2} />
                <Typography variant="p" sx={style.font}>
                  Login with FaceBook
                </Typography>
              </Box>
              <Box sx={style.Box7}>
                <Box sx={style.line}></Box>
                <Typography sx={style.or}>OR</Typography>
                <Box sx={style.line}></Box>
              </Box>

              <TextField
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                variant="standard"
                placeholder="Email123@gmail.com"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={img4}
                        alt="Email Icon"
                        width="20"
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={style.input}
              />
              <TextField
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                variant="standard"
                placeholder="password"
                type={this.state.show ? "text" : "password"}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={img5}
                        alt="Email Icon"
                        width="20"
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ marginLeft: "13px", marginRight: "10px" }}
                    >
                      <IconButton
                        onClick={() =>
                          this.setState({ show: !this.state.show })
                        }
                        edge="end"
                      >
                        {this.state.show ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={style.input}
              />

              <Box sx={style.rem}>
                <Box sx={style.rem1}>
                  <Checkbox />
                  <Typography sx={style.font}>Remember me</Typography>
                </Box>
                <Typography
                  variant="p"
                  sx={{ ...style.font, color: "#6358DC" }}
                >
                  Forgot Password?
                </Typography>
              </Box>

              <Button
                onClick={() => {
                  this.state.email !== "" && this.state.password !== ""
                    ? this.Login()
                    : alert("Enter the id and password");
                }}
                sx={style.button}
              >
                Login
              </Button>
              <Typography sx={style.font}>
                Don’t have an account?
                <span style={{ color: "#6358DC" }}>&nbsp;Register</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default returnhook(Login);
