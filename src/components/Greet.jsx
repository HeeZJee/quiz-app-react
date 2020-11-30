import React from 'react'
import styled from 'styled-components'

export default function Greet({ incorrect, correct }) {
    return (
        <Wrapper>
            <h2> 🙌 Congrats! on completing the quiz.</h2>
            <h4>Your Score: {correct}/{correct + incorrect} </h4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`