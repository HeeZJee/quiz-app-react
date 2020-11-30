import React from 'react'
import Answer from './Answer'

export default function AnswerList({ options, handleChange, correct }) {

    return (
        <>
            {options.map((option, idx) => <Answer option={option} key={idx} value={idx} correct={correct} handleChange={handleChange} />)}
        </>
    )
}
