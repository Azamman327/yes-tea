export async function getInventoryList() {
  const userId: number = Number(window.sessionStorage.getItem('userId'));
  fetch(`/api/inventory/user/${userId}`)
    .then(response => response.json())
    .then((data) => console.log(data));
}