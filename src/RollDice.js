import React, { useEffect, useState } from "react";
import Die from "./Die";
import "./RollDice.css";

const RollDice = () => {
  const sides = ["one", "two", "three", "four", "five", "six"];
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [isRolling, setRolling] = useState(false);

  function roll() {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie1(newDie1);
    setDie2(newDie2);
    setRolling(true);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRolling(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isRolling]);

  return (
    <div className="RollDice">
      <div className="Dies">
        <Die face={die1} rolling={isRolling} />
        <Die face={die2} rolling={isRolling} />
      </div>
      <button onClick={roll} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice!"}
      </button>
    </div>
  );
};

export default RollDice;
