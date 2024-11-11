import { create } from 'zustand'

export interface TimeState {
  minutes: number,
  seconds: number,
  updateTimeState: (time: TimeState) => void
}

export const useTimeStore = create<TimeState>()((set) => ({
  minutes: 0,
  seconds: 0,
  updateTimeState: (time: TimeState) => set(() => ({ minutes: time.minutes, seconds: time.seconds })),
}))
