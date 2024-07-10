import create from "zustand";

type CartState = {
  open: boolean;
  toggle: () => void;
  cart: number[];
  setCart: () => void;
  items: number;
  addItem: () => void;
  removeItem: () => void;
};

const useCartStore = create<CartState>((set, get) => ({
  open: false,
  cart: [],
  setCart: () => {
    const { items } = get();
    if (items > 0) {
      for (let i = 0; i < items; i++) {
        set((state) => ({ cart: [...state.cart, i]}));
      }
      set((state) => ({ items: 0 }));
    }
   },
  toggle: () => set((state) => ({ open: !state.open })),
  items: 0,
  addItem: () => set((state) => ({ items: state.items + 1 })),
  removeItem: () => {
    const { items } = get();
    if (items > 0) {
      set((state) => ({ items: state.items - 1 }));
    }
  },
}));

export default useCartStore;
