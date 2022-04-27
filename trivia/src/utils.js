export function decode(trivia) {
  return Object.fromEntries(
    Object.entries(trivia).map(([k, v]) => {
      if (typeof (v) === 'object') return [k, v.map(x => decodeURIComponent(x))]
      else return [k, decodeURIComponent(v)]
    })
  )
}

export function shuffleAnswers(trivia) {
  return [trivia.correct_answer, ...trivia.incorrect_answers].sort((a, b) => 0.5 - Math.random())
}