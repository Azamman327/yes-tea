"use client";

import { useState, useEffect } from "react";
import '/src/styles/globals.css';

export default function Timer () {
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(id);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);

      setTimerId(id);
    }

    return () => clearInterval(timerId!);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (timerId) {
      clearInterval(timerId);
    }
    setCount(10);
  };

  return (
    <div>
      <span className='minute'></span>
      <div>m</div>
      <span className='second'></span>
      <div>{count}s</div>
      {
        isRunning ?
        <button onClick={pauseTimer}>정지</button>
        :
        <button onClick={startTimer}>시작</button>
      }
      <button onClick={resetTimer}>초기화</button>
    </div>
  );
}

