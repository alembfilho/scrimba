import { nanoid } from 'nanoid'
import { shuffleAnswers } from '../utils'

export default function Trivia ({data}){
  const handleClick = (ans) =>{
    if(ans===data.correct_answer)
      console.log('acertou')
  }

  return <div>
    <h1>{data.question}</h1>
    {shuffleAnswers(data).map(ans=>
      <button 
        key={nanoid()} 
        onClick={()=>handleClick(ans)}
      >{ans}</button>
    )}
  </div>
}