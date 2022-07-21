import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />

      <div className="main-container">
        <div className="empty-div"></div>
        <div className="display-content">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
