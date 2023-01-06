import React from "react";
import { Grid } from "@mui/material";
import Free from "./Free";
import Premiumoffer from "./Premiumoffer";
export default function Premium() {
  return (
    <Grid container justifyContent="space-around">
      <Grid>
        <Free />
        {/* <h1 style={{ backgroundColor: "green" }}>blockg</h1> */}
      </Grid>
      <Grid>
        <Premiumoffer />
        {/* <h1 style={{ backgroundColor: "red" }}>Block 2</h1> */}
      </Grid>
    </Grid>
  );
}
