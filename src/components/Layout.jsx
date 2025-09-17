import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ location, getLoaction, setDrop, drop }) => {
  return (
    <div>
      <Navbar
        location={location}
        getLoaction={getLoaction}
        setDrop={setDrop}
        drop={drop}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
