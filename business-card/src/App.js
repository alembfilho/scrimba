import './App.scss'
import avatar from './images/perfil.jpg'
import Info from './components/Info'
import Buttons from './components/Buttons'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return <div className='card'>
    <img src={avatar} alt='avatar' />
    <Info />
    <Buttons />
    <About />
    <Interests />
    <Footer />
  </div>
}


export default App
