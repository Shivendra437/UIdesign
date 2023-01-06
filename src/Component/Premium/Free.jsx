import React from "react";
import { Box } from "@mui/material";
import { List, ListItem, ListItemText, divider } from "@mui/material";
import Upgradebutton from "../Upgradebutton";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
let arr = [
  "125 Words in the paraphraser",
  "Standard and Fluency mode",
  "3 synonym options",
  "1 Freeze word or phase",
  "120 words in the Summarizer"
];
let arr2 = [
  "Faster processing speed",
  "Advanced grammer rewrites",
  "Compare Models(Destop only)",
  "Plagiarism Checker",
  "Tone detection"
];

export default function Free() {
  return (
    <Box
      style={{
        // border: "2px solid black",
        width: "400px",
        boxShadow: "5px 5px white"
      }}
    >
      <List>
        <ListItem
          divider
          style={{ background: "green", borderRadius: 4, color: "white" }}
        >
          <ListItemText primary="FREE" />
        </ListItem>
      </List>
      <Upgradebutton name="Sign Up-it's Free" />
      <List>
        {arr.map((el) => (
          <ListItem divider>
            <DoneIcon style={{ color: "green", fontSize: "medium" }} />
            <ListItemText primary={el} />
          </ListItem>
        ))}
        {arr2.map((el) => (
          <ListItem divider>
            <CloseIcon style={{ color: "red", fontSize: "medium" }} />
            <ListItemText primary={el} />
          </ListItem>
        ))}
      </List>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "grey",
          height: "30px",
          marginTop: -8,
          borderRadius: 4
        }}
      >
        NO credit card Required
      </div>
    </Box>
  );
}
