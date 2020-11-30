import React from 'react'

export default function Answer({ option, handleChange }) {
    return (
        <div>
            <button value={option} onClick={handleChange}>
                {option}
            </button>
        </div>
    )
}
