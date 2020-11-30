import React, { Component } from 'react';
import Correct from './Correct';
import InCorrect from './InCorrect';

class ScoreArea extends Component {
    render() {
        return (
            <>
                <Correct />
                <InCorrect />
            </>
        );
    }
}

export default ScoreArea;