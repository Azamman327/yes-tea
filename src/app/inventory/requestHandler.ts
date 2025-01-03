'use client';
import axios from 'axios';

type InventoryItem = {
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

export async function getInventoryList() {
  const userId: number = Number(window.sessionStorage.getItem('userId'));
  const response = await fetch(`/api/inventory/user/${userId}`);
  const inventoryList = await response.json();
  return inventoryList;
}

export async function deleteInventory(deleteInventory: InventoryItem[]) {
  try {
    await axios.delete(`/api/inventory/delete`, {
      data: deleteInventory
    });
  } catch (error) {
    console.error(error);
  }
}
