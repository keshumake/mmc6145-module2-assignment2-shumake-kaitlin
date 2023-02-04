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

        
          useTimer={() => {
            timerStart(time + 1)
            timerStop(time(0))
            timerReset(useState(0))
            bestTime(this.time)
          }
          
        }
      />
      <CardGame
        // add onGameStart, onGameEnd props
        cardTexts={cardTexts}

        onGameEnd

      />
      <Modal isShown={showModal} close={() => setShowModal(false)} />
    </>
  );
}

