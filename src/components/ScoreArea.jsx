import styled from 'styled-components';
import React, { Component } from 'react';
import Correct from './Correct';
import InCorrect from './InCorrect';

class ScoreArea extends Component {
    render() {
        const { correct, incorrect } = this.props
        return (
            <Wrapper>
                <Correct correct={correct} />
                <InCorrect incorrect={incorrect} />
            </Wrapper>
        );
    }
}

export default ScoreArea;

const Wrapper = styled.div`
position: absolute;
bottom: 0;
display: flex;
justify-content: space-around;
width: 100%;
background: #e2e2e2;
padding: 10px;
` 