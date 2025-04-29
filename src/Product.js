import React, { Component } from "react";
import { Typography, Box } from "@mui/material";
import { returnhook } from "./returnhooks";

const style = {
  first: {
    marginTop: "20px",
  },

  Box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  Box1: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr",
      md: "1fr 1fr",
      lg: "1fr 1fr 1fr",
    },
    gap: "60px",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    margin: {
      xs: "20px 15px",
      sm: "20px 15px",
      md: "20px 30px",
      lg: "20px 30px",
    },
  },

  Box2: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
    height: "580px",
    width: "350px",
    padding: "15px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  Box3: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15px",
  },

  Box4: {
    fontFamily: "Monospace",
    lineHeight: "20px",
    fontSize: "15px",
    fontWeight: 500,
    color: "black",
  },

  img: {
    height: "420px",
    width: "320px",
    objectFit: "cover",
    borderRadius: "4px",
    border: "1px solid #ffffff",
    display: "block",
  },

  title: {
    fontFamily: "inter",
    lineHeight: "29px",
    fontSize: "24px",
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
};

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  getAPIdata = async () => {
    try {
      let url = "https://fakestoreapi.com/products";
      let response = await fetch(url);
      let json = await response.json();
      this.setState({ products: json });
    } catch (error) {
      console.error("Error fetching data:", error);
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
            {this.state.products.map((element) => (
              <Box
                sx={style.Box2}
                onClick={() =>
                  this.props.navigate(`/navbar/product/${element.id}`)
                }
                key={element.id}>
                <Box
                  component="img"
                  src={element.image}
                  alt="img"
                  sx={style.img}
                />
                <Box sx={style.Box3}>
                  <Typography variant="h6" sx={style.title}>
                    {element.title.split(" ").slice(0, 3).join(" ")}
                  </Typography>
                  <Typography variant="body1" sx={style.Box4}>
                    Price: ${element.price}
                  </Typography>
                  <Typography variant="body2" sx={style.Box4}>
                    Category: {element.category}
                  </Typography>
                  <Typography variant="body2" sx={style.rating}>
                    ⭐ {element.rating.rate} ({element.rating.count} reviews)
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </>
    );
  }
}

export default returnhook(Product);
