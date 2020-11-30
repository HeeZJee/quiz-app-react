import React from 'react'
import styled from 'styled-components'


export default function InCorrect({ incorrect }) {
    return (
        <Wrapper>
            Incorrect: {incorrect}
        </Wrapper>
    )
}

const Wrapper = styled.div`
text-align: center;
`
