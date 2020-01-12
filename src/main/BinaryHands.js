import React from "react";
// comps
import Hands from "./Hands";

const BinaryHands = ({ binary, sizeInfo }) => {
  return (
    <div className={"labApp"}>
      <div
        className={"labApp--content"}
        style={{
          padding: 0,
          width: `${sizeInfo.width}px`,
          height: `${sizeInfo.height}px`
        }}
      >
        <Hands
          binary={binary}
          colours={colours}
          maxWidth={sizeInfo.width}
          maxHeight={sizeInfo.height}
        />
      </div>
    </div>
  );
};

export default BinaryHands;

const colours = [
  "#D32F2F",
  "#F57C00",
  "#FBC02D",
  "#AFB42B",
  "#0097A7",
  "#0288D1",
  "#1976D2",
  "#303F9F",
  "#7B1FA2",
  "#C2185B"
];

// based on: https://www.color-hex.com/color-palette/547
// const skinColourOptions = [
//   "#311e0d",
//   "#523216",
//   "#8d5524",
//   "#c68642",
//   "#e0ac69",
//   "#f1c27d",
//   "#ffdbac",
//   "#ffffff"
// ];
