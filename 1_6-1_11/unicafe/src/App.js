import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good+neutral+bad;
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={()=> setGood(good+1)}>good</button>
      <button onClick={()=> setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=> setBad(bad+1)}>bad</button>

      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total feedback received {total}</p>
      <p>Average feedback score {(good-bad) / (total||1)}</p>
      <p>positive {(good/(total||1))*100}%</p>
    </div>
  )
}

export default App