import email from '../images/email.png';
import linkedin from '../images/linkedin.png';


export default function Buttons() {
  return <div className='buttons'>
    <a className='email' href="mailto:alembfilho@gmail.com">
      <img src={email} alt="email" />
      Email
    </a>
    <a className='linkedin' href="http://linkedin.com/in/alembfilho?locale=en_US">
      <img src={linkedin} alt="linkedin" />
      LinkedIn
    </a>
  </div>

}