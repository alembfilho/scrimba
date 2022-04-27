import { useState } from 'react';
import './App.scss';
import Home from './components/Home';
import Main from './components/Main';

function App() {
  const [started,setStarted] = useState(false)
  const startGame = ()=> setStarted(true)

  return (
    <div className="App">
      {started?<Main/>:<Home startGame={startGame}/>}
      
    </div>
  );
}

export default App;
