import { shuffleAnswers } from '../utils'

export default function Trivia ({data}){
  const handleClick = () =>{console.log('clicked')}

  return <div>
    <h1>{data.question}</h1>
    {shuffleAnswers(data).map((ans,i)=><button key={data.question+i} onClick={handleClick}>{ans}</button>)}
  </div>
}