import React from 'react'

const Total = (props) => {
    const total = props.part.reduce((total,prop) => total+prop.exercises,0)
    return (
    <p>Number of exercises {total}</p>
    )}
export default Total