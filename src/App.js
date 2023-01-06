import React from "react";
import Heading from "./Component/Heading";
import Home from "./Component/Home/Home";

import Upgradebutton from "./Component/Upgradebutton";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Heading name="Save time and write with confidence" />
      <Upgradebutton name="upgrade to Quillbot premium" />
      <Home />
    </div>
  );
}
