import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";

const App = () => {
  return (
    <Fragment>
      <ToastContainer />
      <Main />
    </Fragment>
  );
};

export default App;
