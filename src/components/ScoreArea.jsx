import React, { Component } from 'react';
import Correct from './Correct';
import InCorrect from './InCorrect';

class ScoreArea extends Component {
    render() {
        const { correct, incorrect } = this.props
        return (
            <>
                <Correct correct={correct} />
                <InCorrect incorrect={incorrect} />
            </>
        );
    }
}

export default ScoreArea;