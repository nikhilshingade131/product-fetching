import React, { Component } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { returnhook } from "./returnhooks";

class Layout extends Component {
  componentDidMount() {
    this.check();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.navigate !== this.props.navigate) {
      this.check();
    }
  }

  check = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        this.props.navigate("/");
      }, 0);
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
}

export default returnhook(Layout);
