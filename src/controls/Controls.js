import React, { useState, useRef } from "react";
import styled from "styled-components";
// ui
import { TextField } from "rmwc";
import { IconButton } from "rmwc";
import { Menu, MenuItem, MenuSurfaceAnchor } from "rmwc";
import { Button } from "rmwc";
// comps
import BinaryDisplay from "./binaryDisplay/BinaryDisplay";
import { binaryCols, toBinary, maxCount } from "../helpers/binaryHelpers";

const Controls = ({ onNumberChange, number, binary }) => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSpeed, setTimerSpeed] = useState(speeds[2]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const intervalRef = useRef();

  const startCount = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }

    intervalRef.current = setInterval(() => tick(), timerSpeed.ms);
    setTimerRunning(true);
  };

  const stopCount = () => {
    clearInterval(intervalRef.current);
    setTimerRunning(false);
  };

  const resetCount = () => {
    onNumberChange(0);
    setTimerRunning(false);
  };

  const tick = () => {
    if (number === maxCount) {
      stopCount();
    } else {
      onNumberChange(prevNumber => prevNumber + 1);
    }
  };

  const onNumberTextChange = value => {
    stopCount();

    if (value >= 0 && value <= maxCount) {
      onNumberChange(value);
    }
  };

  const onBinarySelect = colNum => {
    const colIndex = binaryCols.indexOf(colNum);
    if (colIndex < 0) return;

    const binary = toBinary(number, binaryCols);

    const binarySetToOne = binary[colIndex];
    const newNumber = binarySetToOne ? number - colNum : number + colNum;

    onNumberChange(newNumber);
  };

  return (
    <Container>
      <div className={"binaryHands--controls"}>
        <BinaryDisplay
          binary={binary}
          number={number}
          binaryCols={binaryCols}
          onBinarySelect={onBinarySelect}
          colours={colours}
        />

        <div
          className={
            "binaryHands--controls--section binaryHands--numberSection"
          }
        >
          <IconButton
            icon="remove"
            disabled={number === 0}
            onClick={() => onNumberTextChange(parseInt(number - 1, 10))}
          />

          <TextField
            outlined
            className={"binaryHands--numberTextInput"}
            value={number}
            onChange={e => onNumberTextChange(parseInt(e.target.value, 10))}
          />

          <IconButton
            icon="add"
            disabled={number === maxCount}
            onClick={() => onNumberTextChange(parseInt(number, 10) + 1)}
          />
        </div>

        <div
          className={"binaryHands--controls--section binaryHands--timerSection"}
        >
          <IconButton
            icon="skip_previous"
            disabled={number === 0}
            onClick={resetCount}
          />

          {!timerRunning && (
            <IconButton
              disabled={number === maxCount}
              icon="play_arrow"
              onClick={() => startCount()}
            />
          )}
          {timerRunning && (
            <IconButton icon="pause" onClick={() => stopCount()} />
          )}

          <IconButton
            icon="skip_next"
            disabled={number === maxCount}
            onClick={() => onNumberChange(maxCount)}
          />

          <MenuSurfaceAnchor>
            <Menu
              open={menuIsOpen}
              onSelect={evt => setTimerSpeed(speeds[evt.detail.index])}
              onClose={() => setMenuIsOpen(false)}
            >
              {speeds.map(speed => {
                return (
                  <MenuItem key={speed.label} selected={timerSpeed === speed}>
                    {speed.order + ": " + speed.label}
                  </MenuItem>
                );
              })}
            </Menu>

            <Button
              theme={"secondary"}
              disabled={timerRunning}
              onClick={evt => setMenuIsOpen(!menuIsOpen)}
            >
              Timer Speed: {timerSpeed.order}
            </Button>
          </MenuSurfaceAnchor>
        </div>
      </div>
    </Container>
  );
};

export default Controls;

const Container = styled.div`
  height: 100%;
  background: black;
  color: white;
`;

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

const speeds = [
  {
    ms: 2000,
    label: "Mega Slow",
    order: 1
  },
  {
    ms: 1000,
    label: "Slow",
    order: 2
  },
  {
    ms: 500,
    label: "Medium",
    order: 3
  },
  {
    ms: 200,
    label: "Fast",
    order: 4
  },
  {
    ms: 100,
    label: "Super Fast",
    order: 5
  },
  {
    ms: 50,
    label: "Mega Fast",
    order: 6
  }
];
