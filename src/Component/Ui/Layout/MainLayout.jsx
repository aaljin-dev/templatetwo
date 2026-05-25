import React from "react";
import Nav from "../Share/Nav";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
