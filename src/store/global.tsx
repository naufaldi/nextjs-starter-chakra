import { create } from 'zustand'

export const globalStore = create((set) => ({
  onOff: {},
  setOnOff: (params: boolean) => set({ onOff: params }),
}))
