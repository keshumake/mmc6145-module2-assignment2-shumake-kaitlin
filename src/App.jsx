import React, { useState } from "react";
import CardGame from "./components/cardGame";
import Header from "./components/header";
import Modal from "./components/modal";
import { useTimer } from "./util/customHooks";


export default function App() {
  const [showModal, setShowModal] = useState(false);

  const {
    time,
    start: timerStart,
    stop: timerStop,
    reset: timerReset,
  } = useTimer();

  function useTimer() {
    time = useState(0);
    timerStart = { onclick={props.seconds + 1 }};
    timerStop = useState(false);
    timerReset = {}
  }

  const cardTexts = [
    "Bunny 🐰",
    "Frog 🐸",
    "Panda 🐼",
    "Doggy 🐶",
    "Kitty 😺",
    "Duck 🦆",
  ];

  return (
    <>
      <Header
        // add time, bestTime, previousTime props
        openModal={() => setShowModal(true)}
        
      />
      <CardGame
        // add onGameStart, onGameEnd props
        cardTexts={cardTexts}

        onclick={() => onGameStart(time + 1)}

      />
      <Modal isShown={showModal} close={() => setShowModal(false)} />
    </>
  );
}

