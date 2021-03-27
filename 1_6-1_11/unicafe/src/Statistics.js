import React from 'react'

const Statistic = (props) => {
    return <p>{props.text} {props.value}</p>
}

const Statistics = (props) => {
    const {good, neutral, bad} = props;
    const total = good+neutral+bad;
    const statistics = (
        <>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="Total feedback received" value={total}/>
        <Statistic text="Average feedback score" value={(good-bad) / (total||1)} />
        <Statistic text="positive" value={(good/(total||1))*100} />
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