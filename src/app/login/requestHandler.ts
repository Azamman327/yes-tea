export async function login(name: String, password: String): Promise<void> {
  const response = await fetch(`/api/users/login?name=${name}&password=${password}`,
  {
    method: 'GET',
  });
  const data = await response.json();
  console.log(data)
}