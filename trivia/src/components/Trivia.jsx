import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Trivia ({data}){

  function shuffleAnswers(trivia) {
    return [{text: trivia.correct_answer, isCorrect: true, isSelected: false},
      ...trivia.incorrect_answers.map(ans=>({text: ans, isCorrect: false, isSelected: false}))
    ].sort((a, b) => 0.5 - Math.random())
  }

  const [answers, setAnswers] = useState(shuffleAnswers(data))

  const handleClick = (ans) =>{
    console.log('acertou')
    // if(ans===data.correct_answer)
    setAnswers(oldAns=>oldAns.map(old=> old.text===ans.text?{...old, isSelected:!old.isSelected}:old))
  }

  return <div>
    <h2>{data.question}</h2>
    {answers.map(ans=>
      <button 
        key={nanoid()} 
        onClick={()=>handleClick(ans)}
        className={`${ans.isSelected&&"selected"}`}
      >{ans.text}</button>
    )}
  </div>
}