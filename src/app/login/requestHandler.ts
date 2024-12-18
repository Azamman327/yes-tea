export async function login(name: String, password: String): Promise<void> {
  const response = await fetch(`/api/users/login?name=${name}&password=${password}`,
  {
    method: 'GET',
  });
  const result = await response.json();
  console.log(result);

  switch(result){
    case 1:
      window.location.replace('/timer');
      break;
    case 2:
      alert('틀린 비밀번호입니다.');
      break;
    case 0:
      alert('존재하지 않는 회원입니다.');
      break;
  }
}