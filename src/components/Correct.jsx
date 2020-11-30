import React from 'react'
import styled from 'styled-components'

export default function Correct({ correct }) {
    return (
        <Wrapper>
            Correct: {correct}
        </ Wrapper>
    )
}


const Wrapper = styled.div`
text-align: center;
`