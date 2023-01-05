import React from "react";
import { Button } from "@mui/material";
export default function Upgradebutton(props) {
  return (
    <>
      <Button
        style={{ borderRadius: 50, minWidth: "260px" }}
        variant="contained"
        color="success"
      >
        {" "}
        {props.name}
      </Button>
    </>
  );
}
