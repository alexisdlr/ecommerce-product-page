import { create } from 'zustand'
type CartState = {
  open: boolean;
  toggle: () => void;
  cart: number;
  setCart: () => void;
  items: number;
  addItem: () => void;
  removeItem: () => void;
  resetCart: () => void;
};

const useCartStore = create<CartState>((set, get) => ({
  open: false,
  cart: 0,
  setCart: () => {
    const { items } = get();
    if (items > 0) {
      
      set(() => ({ cart: items }));
    }
    set(() => ({ items: 0 }));
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
  resetCart: () => set(() => ({ items: 0, cart: 0})),
}));

export default useCartStore;
