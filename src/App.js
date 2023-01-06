import React from "react";
import Premium from "./Component/Premium/Premium";
import Heading from "./Component/Heading";
import Home from "./Component/Home/Home";
import "./styles.css";
import Upgradebutton from "./Component/Upgradebutton";
import Progress from "./Component/Progressbar/Progress";

export default function App() {
  return (
    <div className="App">
      <Heading name="Save Time and Write With Confidence" />
      <Upgradebutton name="upgrade to quillbot premium" />
      <Home />
      <Premium />
      <Progress />
    </div>
  );
}
