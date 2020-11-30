import React, { Component } from 'react';
import AnswerList from './AnswerList';
import Question from './Question';

class QuestionsArea extends Component {
    render() {
        return (
            <>
                <Question />
                <AnswerList />
            </>
        );
    }
}

export default QuestionsArea;