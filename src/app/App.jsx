import React from "react";
import Nav from "../Component/Ui/Share/Nav";
import Base from "../Component/Ui/Share/Base";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
