import { useState } from 'react';
import './App.scss';
import yellowBlob from './images/blob-yellow.svg'
import blueBlob from './images/blob-blue.svg'
import Home from './components/Home';
import Main from './components/Main';

function App() {
  const [started,setStarted] = useState(false)
  const startGame = ()=> setStarted(true)

  return (
    <div className="App">
      {started?<Main/>:<Home startGame={startGame}/>}
      <img id="yellowBlob" src={yellowBlob} alt="yellowBlob" />
      <img id="blueBlob"  src={blueBlob} alt="blueBlob" />
    </div>
  );
}

export default App;
