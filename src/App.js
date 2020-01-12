import React, { useState } from "react";
import * as Space from "react-spaces";
//
import TopBar from "./top-bar/TopBar";
import BinaryHands from "./main/BinaryHands";
import Controls from "./controls/Controls";
import { binaryCols, toBinary } from "./helpers/binaryHelpers";

const defaultNumber = 438;

function App() {
  const [number, setNumber] = useState(defaultNumber);
  const binary = toBinary(number, binaryCols);

  return (
    <Space.ViewPort>
      <Space.Top size={60}>
        <TopBar
          title={"Binary Hands"}
          infoUrl={"https://artfly.io/binary-hands"}
        />
      </Space.Top>
      <Space.Fill trackSize={true}>
        <Space.Info>
          {sizeInfo => <BinaryHands sizeInfo={sizeInfo} binary={binary} />}
        </Space.Info>
      </Space.Fill>
      <Space.BottomResizable size={265}>
        <Controls onNumberChange={setNumber} number={number} binary={binary} />
      </Space.BottomResizable>
    </Space.ViewPort>
  );
}

export default App;
