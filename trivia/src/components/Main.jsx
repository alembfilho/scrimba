import { useEffect, useState } from 'react'
import Question from './Question'

export default function Main (){
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res=>res.json())
      .then(({results})=>setQuestions(results))
  },[])

  return <div>
    {questions.map(q=><Question data={q}/>)}
  </div>
}