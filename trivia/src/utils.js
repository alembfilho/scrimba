export function decode(trivia) {
  return Object.fromEntries(
    Object.entries(trivia).map(([k, v]) => {
      if (typeof (v) === 'object') return [k, v.map(x => decodeURIComponent(x))]
      else return [k, decodeURIComponent(v)]
    })
  )
}