import { useEffect, useState } from 'react'
import { decode } from '../utils'
import '../styles/Main.scss'
import Trivia from './Trivia'
import {nanoid} from 'nanoid'

export default function Main (){
  const [trivias, setTrivias] = useState([])

  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&encode=url3986')
      .then(res=>res.json())
      .then(({results})=>{
          const dec = results.map(trivia=>decode(trivia))
          console.log(dec)
          setTrivias(dec)
        })
  },[])

  return <div className='main'>
    {trivias.map((trivia,i)=><Trivia key={nanoid()} data={trivia}/>)}
  </div>
}