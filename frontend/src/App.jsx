import React from "react";
import UserTable from "./components/userTable/UserTable";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <h1>CMS Headless</h1>
      </div>
      <UserTable />
    </div>
  );
};

export default App;
