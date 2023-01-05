import React from "react";
import { Grid } from "@mui/material";

export default function Premium() {
  return (
    <Grid container justifyContent="space-around">
      <Grid item>
        <h1 style={{ backgroundColor: "green" }}>Block 1</h1>
      </Grid>
      <Grid item>
        <h1 style={{ backgroundColor: "red" }}>Block 2</h1>
      </Grid>
    </Grid>
  );
}
