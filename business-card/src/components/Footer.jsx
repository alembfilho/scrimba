import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';


export default function Footer() {
  return <div className='footer'>
    <a href="http://twitter.com/alembfilho">
      <img src={twitter} alt="twitter" />
    </a>
    <a href="http://facebook.com/alembfilho">
      <img src={facebook} alt="facebook" />
    </a>
    <a href="http://instagram.com/alembfilho">
      <img src={instagram} alt="instagram" />
    </a>
    <a href="http://github.com/alembfilho">
      <img src={github} alt="github" />
    </a>
  </div>

}