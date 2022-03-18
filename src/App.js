import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch("http://localhost:8080/appointments/bloodtype/A")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }, [])
  return (
    <h1>Hello World</h1>
  );
}

export default App;
