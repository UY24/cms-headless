import React from "react";
import UserTable from "./components/userTable/UserTable";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <div className="navbar">
        <h1>CMS Headless</h1>
      </div>
      <UserTable />
    </div>
  );
};

export default App;
