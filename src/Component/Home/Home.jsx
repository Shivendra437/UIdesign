import React from "react";
import Linear from "./Linear";
import synonym from "./synonym.svg";
export default function Home() {
  const dummyData = [
    {
      title: "Increase your productivity",
      description: "Paraphrase more text at once to finish writing faster."
    },
    {
      title: "Access all modes",
      description: "Get maximum control over how you paraphrase."
    },
    {
      title: "Scan for plagiarism",
      description:
        "Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized."
    },
    {
      title: "Compare all mode outputs at once",
      description: "Paraphrase in and compare outputs from all seven modes."
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "30px"
      }}
    >
      <div style={{ height: "300px" }}>
        <img src={synonym} alt="#" />
      </div>
      <div>
        {dummyData.map((el, i) => {
          return (
            <div style={{ width: "50%", textAlign: "inline-start" }} key={i}>
              <h3 style={{ color: "green" }}>{el.title}</h3>
              <p>{el.description}</p>
              <Linear />
            </div>
          );
        })}
      </div>
    </div>
  );
}
