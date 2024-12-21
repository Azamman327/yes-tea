'use client';
import axios from 'axios';

export async function login(name: String, password: String): Promise<void> {
  try {
    const response = await axios.post('/api/users/login', {
      name: name,
      password: password,
    });

    console.log(response.data);
    window.location.replace('/timer');
  } catch (error) {
    let errorMessage = error.response.data.message;
    
    if (errorMessage == "INVALID USER") {
      alert('존재하지 않는 회원입니다.');
    }
    else if (errorMessage == "WRONG PASSWORD") {
      alert('잘못된 비밀번호입니다.');
    }
  }
}