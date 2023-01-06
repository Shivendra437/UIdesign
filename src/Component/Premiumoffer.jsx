import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import Upgradebutton from "./Upgradebutton";
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

let arr = [
  "unlimited words in the paraphraser",
  "standard,Expand,Fluency,Shorten",
  "4 synonym option",
  "unlimited freeze words and phrases",
  "600 words in summarizer",
  "Faster processing speed",
  " Advanced grammer rewrite",
  "Compare models(Destop only)",
  " Palagrism Checker",
  "Tone detection"
];

export default function Premiumoffer() {
  return (
    <Box style={{ border: "2px solid black", width: "330px" }}>
      <List>
        <ListItem
          divider
          style={{ background: "orange", borderRadius: 4, color: "white" }}
        >
          <DiamondIcon sx={{ mr: 0.5 }} />
          <ListItemText sx={{ fontSize: "larger" }} primary="PREMIUM" />
        </ListItem>
      </List>
      <Upgradebutton name="upgrade to premium" />

      <List>
        {arr.map((el) => (
          <ListItem divider>
            <DoneIcon style={{ color: "orange", fontSize: "medium" }} />
            <ListItemText primary={el} />
            <ErrorOutlineRoundedIcon sx={{ ml: 0.5, color: "grey" }} />
          </ListItem>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "grey",
            height: "40px"
          }}
        >
          3-DMoney-Back Gurantee
        </div>
      </List>
    </Box>
  );
}
