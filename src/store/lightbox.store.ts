import { create } from "zustand";

type LightboxState = {
  open: boolean;
  toggle: () => void;
  image: string;
  setImage: (image: string) => void;
};

const useLightboxStore = create<LightboxState>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
  image: "",
  setImage: (image) => set(() => ({ image })),
}));

export default useLightboxStore;