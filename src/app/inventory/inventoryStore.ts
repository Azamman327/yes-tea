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


interface InventoryState {
  items: InventoryItems[]
  initial: (initailInven: InventoryItems[]) => void
  // delete: (teaId: number, items: InventoryItems[]) => void
}

const useInventoryStore = create<InventoryState>()((set) => ({
  items: [],
  initial: (initailItems: InventoryItems[]) => set(() => ({ items: initailItems })),
  // delete: (teaId: number, items:InventoryItems[]) => set(() => ({
    
  // }))
}))