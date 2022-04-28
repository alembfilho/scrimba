import { nanoid } from 'nanoid'
import { shuffleAnswers } from '../utils'

export default function Trivia ({data}){
  const handleClick = (ans) =>{
    if(ans===data.correct_answer)
      console.log('acertou')
  }

  return <div>
    <h2>{data.question}</h2>
    {shuffleAnswers(data).map(ans=>
      <button 
        key={nanoid()} 
        onClick={()=>handleClick(ans)}
      >{ans}</button>
    )}
  </div>
}