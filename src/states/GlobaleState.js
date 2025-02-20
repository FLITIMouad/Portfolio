import { create } from "zustand";

export const useGlobaleState = create((set) => ({
    historical: [],
    setHistorical: (historical) => set(() => ({ historical: historical })),
    addHistorical: (command) => set((state) => ({ historical: [...state.historical.map((p) => ({ ...p, active: false })),command] })),
  }))