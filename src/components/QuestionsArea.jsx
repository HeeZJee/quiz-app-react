import React, { Component } from 'react';
import AnswerList from './AnswerList';
import Question from './Question';

class QuestionsArea extends Component {
    render() {
        const { data, handleChange } = this.props

        return (
            <>
                <Question question={data.question} />
                <AnswerList options={data.options} handleChange={handleChange} />
            </>
        );
    }
}

export default QuestionsArea;