import React from 'react'
import Answer from './Answer'

export default function AnswerList({ options, handleChange }) {

    return (
        <>
            {options.map((option, idx) => <Answer option={option} key={idx} handleChange={handleChange} />)}
        </>
    )
}
