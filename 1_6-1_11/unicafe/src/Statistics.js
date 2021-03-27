import React from 'react'

const Statistics = (props) => {
    const {good, neutral, bad} = props;
    const total = good+neutral+bad;
    const statistics = (
        <>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>Total feedback received {total}</p>
        <p>Average feedback score {(good-bad) / (total||1)}</p>
        <p>positive {(good/(total||1))*100}%</p>
        </>
    )
    return (
        <>
        <h1>Statistics</h1>
        {total===0 ? <p>No feedback</p> : statistics}
        </>
    )
}

export default Statistics