export async function getInventoryList() {
  const userId: number = Number(window.sessionStorage.getItem('userId'));
  const response = await fetch(`/api/inventory/user/${userId}`);
  const inventoryList = await response.json();
  return inventoryList
}