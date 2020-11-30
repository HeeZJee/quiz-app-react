import React from 'react'
import styled from 'styled-components'

export default function Answer({ option, handleChange, value }) {
    return (
        <div>
            <Button value={value} onClick={handleChange}>
                {option}
            </Button>
        </div>
    )
}

const Button = styled.button`
display: block;
width: 200px;
font-size: 16px;
background-color: green;
color: white;
padding: 10px 10px;
margin: 5px auto;
border: none;
border-radius: 10px;
outline: none;
:hover {
opacity: 0.8;
}
:active{
    opacity: 0.6;
}
`