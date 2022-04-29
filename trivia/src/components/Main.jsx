import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import '../styles/Main.scss'
import { decode } from '../utils'
import Trivia from './Trivia'

export default function Main() {
  const [trivias, setTrivias] = useState([])
  const [isCheckingAnswers, setCheckingAnswer] = useState(false)
  const [score, setScore] = useState(0)

  // eslint-disable-next-line
  useEffect(() => getTrivia(), [])

  function getTrivia() {
    fetch('https://opentdb.com/api.php?amount=5&encode=url3986')
      .then(res => res.json())
      .then(({ results }) => {
        const dec = results
          .map(trivia => decode(trivia))
          .map(trivia => ({
            question: trivia.question,
            answers: shuffleAnswers(trivia)
          }))
        setTrivias(dec)
      })
  }

  function shuffleAnswers(trivia) {
    return [{ text: trivia.correct_answer, isCorrect: true, isSelected: false },
    ...trivia.incorrect_answers.map(ans => ({ text: ans, isCorrect: false, isSelected: false }))
    ].sort((a, b) => 0.5 - Math.random())
  }

  const setAnswer = trivia => ans =>
    setTrivias(oldTrivias =>
      oldTrivias.map(oldTrivia => {
        if (oldTrivia.question === trivia.question)
          return {
            ...oldTrivia,
            answers: oldTrivia.answers.map(old =>
              old.text === ans.text ?
                { ...old, isSelected: true } :
                { ...old, isSelected: false }
            )
          }
        else return oldTrivia
      })
    )

  function checkOrRestart() {
    if (isCheckingAnswers) getTrivia()
    else setScore(trivias.reduce((t, { answers }) =>
      t + answers.some(ans => ans.isCorrect && ans.isSelected), 0)
    )

    setCheckingAnswer(old => !old)
  }


  return <div className='main'>
    {trivias.map(trivia =>
      <Trivia
        key={nanoid()}
        trivia={trivia}
        setAnswer={setAnswer(trivia)}
        isCheckingAnswers={isCheckingAnswers} />
    )}

    <div className='checkAnswers'>
      {isCheckingAnswers && <h3>You scored {score}/5 correct answers</h3>}

      <button
        className='mainButton'
        onClick={checkOrRestart}
      >{isCheckingAnswers ? "Play again" : "Check answers"}</button>

    </div>
  </div>
}