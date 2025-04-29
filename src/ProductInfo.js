import React, { Component } from "react";
import { Typography, Box } from "@mui/material";
import { returnhook } from "./returnhooks";

const style = {
  Box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    marginTop: "20px",
  },

  Box1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    padding: {
      xs: "20px 15px",
      sm: "20px 15px",
      md: "20px 50px",
      lg: "20px 50px",
    },
  },

  Box2: {
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
  },

  Box3: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15px",
    width: { xs: "80%", sm: "80%", md: "100%", lg: "100%" },
    gap: { xs: "20px", sm: "20px", md: "10px", lg: "10px" },
  },

  Box4: {
    fontFamily: "Inter",
    lineHeight: { xs: "20px", sm: "25px", md: "35px", lg: "35px" },
    fontSize: { xs: "15px", sm: "20px", md: "22px", lg: "22px" },
    fontWeight: 500,
    color: "black",
  },

  img: {
    height: { xs: "430px", sm: "480px", md: "440px", lg: "440px" },
    width: { xs: "330px", sm: "400px", md: "380px", lg: "380px" },
    objectFit: "cover",
    borderRadius: "4px",
    border: "4px solid rgb(255, 255, 255)",
    display: "block",
  },

  title: {
    fontFamily: "inter",
    lineHeight: { xs: "35px", sm: "45px", md: "66px", lg: "66px" },
    fontSize: { xs: "30px", sm: "40px", md: "60px", lg: "60px" },
    fontWeight: 500,
    color: "F4F1DE",
  },

  rating: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Monospace",
    lineHeight: "20px",
    fontSize: "15px",
    fontWeight: 500,
    color: "black",
  },

  Box5: {
    fontFamily: "Monospace",
    lineHeight: { xs: "20px", sm: "25px", md: "35px", lg: "35px" },
    fontSize: { xs: "15px", sm: "20px", md: "22px", lg: "22px" },
    fontWeight: "bold",
    color: "black",
  },
};

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  getAPIdata = async () => {
    try {
      let { id } = this.props.params;
      let url = `https://fakestoreapi.com/products/${id}`;
      let data = await fetch(url);
      let json = await data.json();
      console.log(json, "response");
      this.setState({ product: json });
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  componentDidMount() {
    this.getAPIdata();
  }

  render() {
    return (
      <>
        <Box sx={style.Box}>
          <Box sx={style.Box1}>
            {this.state.product && (
              <Box sx={style.Box2} key={this.state.product.id}>
                <Box
                  component="img"
                  src={this.state.product.image}
                  alt="img"
                  sx={style.img}
                />
                <Box sx={style.Box3}>
                  <Typography variant="h6" sx={style.title}>
                    {this.state.product.title}
                  </Typography>
                  <Typography variant="h6" sx={style.Box4}>
                    {this.state.product.description}
                  </Typography>
                  <Typography variant="body1" sx={style.Box5}>
                    Price: ${this.state.product.price}
                  </Typography>
                  <Typography variant="body2" sx={style.Box4}>
                    Category: {this.state.product.category}
                  </Typography>
                  <Typography variant="body2" sx={style.rating}>
                    ⭐ {this.state.product.rating.rate} (
                    {this.state.product.rating.count} reviews)
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </>
    );
  }
}

export default returnhook(ProductInfo);
