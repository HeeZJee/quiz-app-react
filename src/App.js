import React, { Component } from 'react'
import ScoreArea from './components/ScoreArea';
import QuestionsArea from './components/QuestionsArea';
import data from './utils/_DATA'
import Greet from './components/Greet';

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
    console.log(value)
  }

  render() {

    const { data, current, correct, incorrect, isFinished } = this.state

    return (
      isFinished
        ?
        <Greet />
        :
        <>
          <QuestionsArea data={data[current]} handleChange={this.handleChange} />
          <ScoreArea correct={correct} incorrect={incorrect} />
        </>
    )
  }
}

