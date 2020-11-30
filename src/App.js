import React, { Component } from 'react'
import ScoreArea from './components/ScoreArea';
import QuestionsArea from './components/QuestionsArea';
import data from './utils/_DATA'
import Greet from './components/Greet';
import styled from 'styled-components'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data,
      current: 0,
      correct: 0,
      incorrect: 0,
      isFinished: false,
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e) => {
    const value = e.target.value
    const correct = this.state.data[this.state.current].correct.toString()
    const current = this.state.current
    const questionsLenght = this.state.data.length - 1
    console.log(questionsLenght)
    // console.log(value)
    // console.log(correct)
    if (value === correct) {
      this.setState({ correct: this.state.correct + 1 })
    }
    else {
      this.setState({ incorrect: this.state.incorrect + 1 })
    }

    if (current === questionsLenght) {
      setTimeout(
        () => this.setState({ isFinished: true }), 300
      )
    }
    else {
      setTimeout(
        () => this.setState({ current: this.state.current + 1 }), 300
      )
    }

  }

  render() {

    const { data, current, correct, incorrect, isFinished } = this.state

    return (
      isFinished
        ?
        <Greet correct={correct} incorrect={incorrect} />
        :
        <Wrapper>
          <h1>JavaScript Quiz</h1>
          <QuestionsArea data={data[current]} handleChange={this.handleChange} />
          <ScoreArea correct={correct} incorrect={incorrect} />
        </Wrapper>
    )
  }
}


const Wrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-direction: column;
` 