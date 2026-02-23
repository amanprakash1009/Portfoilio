import { create } from "zustand";

type ActiveStore = {
  active: string;
  setActive: (link: string) => void;
};

export const useActiveStore = create<ActiveStore>((set) => ({
  active: "home",
  setActive: (active) => set(() => ({ active: active })),
}));
