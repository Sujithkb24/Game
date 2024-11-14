import React,{useState,useEffect} from "react";
import'/styles/Navbar.css'
import '/styles/Card.css'
import '/styles/HomePage.css'
import Card from "./Card";
import { useAuth } from "../../store/auth";
import {Navigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
function HomePage(){

    const {token} = useAuth()
    
    

    if(!token)
    {
      return <Navigate to="/"/>
    }

    return(<div className="main">
     
  
      <div className="Stage">
      <Card img="/public\Animation - 1731351239476.gif" title="Add Product" content="New Product"/>
      <Card img="/public/Animation - 1731351019977.gif" title="Add Stock" content="Adder "/>
      
      <Card img="/public/Animation - 1731350710072.gif" title="Scan With BarCode" content="scanner" sendRequest = "/Scan"/>
        </div>
        </div>
    
      
    );
}
export default HomePage;