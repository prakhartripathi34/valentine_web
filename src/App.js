import React  from "react" ;
import { useState } from "react";
import "./App.css";

const phrases = {
  0: "No",
  1: "Are you sure?",
  2: "Really?",
  3: "please",
  4: " i am  gonna cry",
  5: "please",
};

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 60;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, Object.keys(phrases).length - 1)];
  }

  return (
    React.createElement("div", { className: "valentine-container" },
      yesPressed ? (
        [
          React.createElement("img", {
            alt: "dancing",
            src: "https://media.tenor.com/rLnhPt31OFUAAAAM/swing-dance-swing-your-hips.gif",
          }),
          React.createElement("img", {
            alt: "kissing",
            src: "https://media.tenor.com/TtwmH_yQ3XAAAAAM/mewdi-moni.gif",
          }),
          React.createElement("div", { className: "text" }, "Yayy!!!!"),
        ]
      ) : (
        [
          React.createElement("img", {
            alt: "with heart",
            src: "https://media.tenor.com/HXa-urHqboYAAAAM/milk-and-mocha-i-love-you.gif",
            // style={{ width: `125px`, height: '125px' }}
          }),
          React.createElement("div", null, "Will you be my valentine...."),
          React.createElement("div", null,
            React.createElement("button", {
              className: "yesButton",
              style: { fontSize: yesButtonSize },
              onClick: () => setYesPressed(true),
            }, "Yes"),
            React.createElement("button", { className: "noButton", onClick: handleNoClick },
              getNoButtonText()
            ),
          ),
        ]
      ),
    )
  );
}

export default App;
