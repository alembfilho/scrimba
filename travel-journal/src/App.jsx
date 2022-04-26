import logo from './images/globe.png';
import './App.scss';
import data from './data';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>my travel journal.</p>
      </header>

      {data.map((place,i)=><Card key={i+1} {...place}/>)}
    
    </div>
  );
}

export default App;
