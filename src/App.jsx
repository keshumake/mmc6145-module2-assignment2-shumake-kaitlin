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
        
        time={useState(0)}
        bestTime={this.bestTime}
        previousTime={this.previousTime}
      />
      <CardGame
        // add onGameStart, onGameEnd props
        cardTexts={cardTexts}

        onGameStart={timerStart}
        onGameEnd={timerStop}

      />
      <Modal isShown={showModal} close={() => setShowModal(false)} />
    </>
  );
}

