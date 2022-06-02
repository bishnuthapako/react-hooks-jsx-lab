import React from "react";
import { name, city } from "../data/data.js";

function Home() {
 const colorStyle = {
  color: 'firebrick'
 };
//  const textContent = `${name} is a Web Developer from Your ${city}`;
  // update the JSX being returned!
  return <div id="home">
    <h1 style={colorStyle}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
