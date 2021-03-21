import React from 'react'
import Part from './Part'

const Content = (props) => (
    <div>
        <Part part={props.part[0]}/>
        <Part part={props.part[1]}/>
        <Part part={props.part[2]}/>
    </div>
)

export default Content