import React from "react";

import Category from "./Categories";
import Featured from "./Featured";
import Banner from "./Banner";
import Others from "./Others";

const Home = () => {
 

  return (
    <>
    <Featured/>
    <Category/>

    
    <Banner/>
    <Others/>
    </>
  );
};

export default Home;