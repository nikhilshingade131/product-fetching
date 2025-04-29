import React from 'react'
import {Box} from "@mui/material";


const style = {
    Box1:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:{xs:"320px",sm:"300px",md:"230px",lg:"230px"},
        fontSize:{xs:"30px",sm:"30px",md:"50px",lg:"50px"},
        fontFamily:"Inter",
        color:"grey"
    },
}
const Home = () => {
  return (
    <Box sx={style.Box1}>
        Welcome to Our Website...
    </Box>
  )
}

export default Home