'use client';

import { useState, useEffect } from 'react';
import '/src/styles/globals.css';

import { useTimeStore } from "./timeStore"

export default function Timer() {
  const timeStore = useTimeStore();

  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const minutes: number = useTimeStore((state) => state.minutes)
  const seconds: number = useTimeStore((state) => state.seconds)

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        timeStore.updateSecondsState(timeStore.seconds - 1);
        console.log(timeStore.seconds);
        if (timeStore.seconds <= 1) {
          clearInterval(id);
          setIsRunning(false);
        }
      }, 1000)
      setTimerId(id);
    }
    return () => clearInterval(timerId!);
  }, [isRunning, timeStore]);

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
    timeStore.updateMinutesState(0);
    timeStore.updateSecondsState(10);
  };

  return (
    <div className="w-full pt-36">
      <div className="flex flex-row justify-center">
        <span className="minute"></span>
        <div>{minutes}m</div>
        <span className="second ml-4"></span>
        <div>{seconds}s</div>
      </div>
      <div className="flex flex-row justify-center gap-8">
        {isRunning ? (
          <button
            className="mt-4 w-full rounded-md bg-stopred py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-stopredhover hover:bg-stopredhover active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
            type="submit"
            onClick={pauseTimer}
          >
            정지
          </button>
        ) : (
          <button
            className="mt-4 w-full rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-green-600 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
            type="submit"
            onClick={startTimer}
          >
            시작
          </button>
        )}
        <button
          className="mt-4 w-full rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-green-600 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
          type="submit"
          onClick={resetTimer}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
