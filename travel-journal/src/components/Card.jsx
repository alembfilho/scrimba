import maps from '../images/maps.png'
import '../Card.scss'

export default function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}){
  return <div className='card'>
    <div className='image' style={{ backgroundImage:`url(${imageUrl})` }}/>
    <div className='place'>
      <div className='location'>
        <img src={maps} alt="maps" />
        <span>{location}</span>
        <a href={googleMapsUrl}>View on Google Maps</a>
      </div>

      <h1>{title}</h1>
      <span>{startDate} - {endDate}</span>
      <p>{description}</p>
    </div>
  </div>
}

