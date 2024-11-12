import { create } from 'zustand'

export interface TimeState {
  minutes: number,
  seconds: number,
  updateMinutesState: (minutes: number) => void,
  updateSecondsState: (seconds: number) => void,
  updateTimeState: (time: TimeState) => void
}

export const useTimeStore = create<TimeState>()((set) => ({
  minutes: 0,
  seconds: 10,
  updateMinutesState: (minutes: number) => set(() => ({minutes: minutes})),
  updateSecondsState: (seconds: number) => set(() => ({seconds: seconds})),
  updateTimeState: (time: TimeState) => set(() => ({ minutes: time.minutes, seconds: time.seconds })),
}))
