import React from "react";
import { Typography } from "@mui/material";
export default function Heading(props) {
  return (
    <Typography varient="Substitle" style={{ fontSize: 20 }}>
      {props.name}
    </Typography>
  );
}
