fetch('/test')
  .then((res) => res.text())
  .then((data) => console.log('Response:', data))
  .catch((err) => console.error('Error:', err));