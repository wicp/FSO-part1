import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const randomHandler = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteHandler = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const indexOfMax = (arr) => {
    return arr.reduce(([maxValue,maxIndex],currentValue,currentIndex) => {
      if (currentValue > maxValue) return [currentValue,currentIndex]
      else return [maxValue,maxIndex]
    },[0,0])[1]
  }
  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>{votes[selected]} Votes</p>
        <button onClick={randomHandler}>Next Annecdote</button>
        <button onClick={voteHandler}>Vote</button>
      </div>
      <div>
        <h2>Most voted Anecdote</h2>
        <p>{anecdotes[indexOfMax(votes)]}</p>
      </div>
    </div>
  )
}

export default App