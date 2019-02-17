export async function getUsers (setUsers) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`)
  const users = await response.json();
  setUsers(users);
  return;
}