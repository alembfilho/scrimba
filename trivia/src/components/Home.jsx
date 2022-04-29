import '../styles/Home.scss'

export default function Home ({startGame}){
  return <div className='home'>
    <h1>Quizzical</h1>
    <p>It's time to test your knowledge!</p>
    <button className='mainButton' onClick={startGame}>Start quiz</button>
  </div>
}