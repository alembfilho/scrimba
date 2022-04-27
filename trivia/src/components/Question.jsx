export default function Question ({data}){
  const handleClick = () =>{console.log('clicked')}

  return <div>
    <h1>{data.question}</h1>
    {data.incorrect_answers.map(ans=><button onClick={handleClick}>{ans}</button>)}
  </div>
}