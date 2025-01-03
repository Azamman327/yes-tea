import { create } from 'zustand';

type InventoryItems = {
  inventory: {
    inventoryId: {
      userId: number;
      teaId: number;
    };
    amount: number;
    expired: string;
  };
  tea: {
    teaId: number;
    brand: string;
    name: string;
    packagingtype: string;
    type: string;
    minute: number;
    second: number;
    temperature: number;
    quantity: number;
    watervolume: number;
  };
};

export interface InventoryState {
  items: InventoryItems[];
  initial: (initailInven: InventoryItems[]) => void;
  delete: (items: InventoryItems[]) => void;
}

export const useInventoryStore = create<InventoryState>()((set) => ({
  items: [],
  initial: (initailItems: InventoryItems[]) => set(() => ({ items: initailItems })),
  delete: (items: InventoryItems[]) =>
    set((state) => ({
      items: state.items.filter((item) => !items.includes(item)),
    })),
}));
