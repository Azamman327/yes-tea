'use client';

import { useState, useEffect } from 'react';
import '/src/styles/globals.css';

import { TimeState, useTimeStore } from "./timeStore"

export default function Timer() {
  // zustand 사용. useState 삭제 작업 필요
  // const [minute, setMinute] = useState(1);
  // const [second, setSecond] = useState(10);
  const timeStore = useTimeStore();

  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  // useState -> useTimeStore 사용으로 변경
  // useEffect(() => {
  //   if (isRunning) {
  //     const id = setInterval(() => {
  //       setSecond((prevsecond) => {
  //         if (prevsecond <= 1) {
  //           clearInterval(id);
  //           return 0;
  //         }
  //         return prevsecond - 1;
  //       });
  //     }, 1000);

  //     setTimerId(id);
  //   }

  //   return () => clearInterval(timerId!);
  // }, [isRunning]);

  // const startTimer = () => {
  //   setIsRunning(true);
  // };

  // const pauseTimer = () => {
  //   setIsRunning(false);
  //   if (timerId) {
  //     clearInterval(timerId);
  //   }
  // };

  // const resetTimer = () => {
  //   setIsRunning(false);
  //   if (timerId) {
  //     clearInterval(timerId);
  //   }
  //   setSecond(10);
  // };

  const minutes = useTimeStore((state) => state.minutes)
  const seconds = useTimeStore((state) => state.seconds)

  return (
    <div className="w-full">
      <div className="flex flex-row justify-center">
        <span className="minute"></span>
        <div>{minutes}m</div>
        <span className="second ml-4"></span>
        <div>{seconds}s</div>
      </div>
      {/* useState -> useTimeStore 사용으로 변경 */}
      {/* <div className="flex flex-row justify-center gap-8">
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
      </div> */}
    </div>
  );
}
