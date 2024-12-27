'use client';
import axios from 'axios';

export async function createUser(name: String, password: String, email: String): Promise<void> {
  try {
    const response = await axios.post('/api/users/create', {
      name: name,
      password: password,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
