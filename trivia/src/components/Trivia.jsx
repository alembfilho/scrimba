import { nanoid } from 'nanoid'
import '../styles/Trivia.scss'

export default function Trivia({ trivia, setAnswer, isCheckingAnswers }) {

  function classes(ans) {
    if (isCheckingAnswers) {
      if (ans.isCorrect) return "correct"
      else return ans.isSelected ? "incorrect" : "disabled"
    } else return ans.isSelected ? "selected" : ""
  }

  return <div className='trivia'>
    <h2>{trivia.question}</h2>

    {trivia.answers.map(ans =>
      <button
        key={nanoid()}
        disabled={isCheckingAnswers}
        className={classes(ans)}
        onClick={() => setAnswer(ans)}
      >{ans.text}</button>
    )}

  </div>
}