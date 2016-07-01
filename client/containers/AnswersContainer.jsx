import { connect } from 'react-redux'

import Answers from '../components/Answers'

const mapStateToProps = (state) => {
  const currentQuestion = state.questions[0]
  const answers = state.answers.filter((answer) => (currentQuestion.id === answer.questionId))

  return {
    answers: answers
  }
}

export default connect(mapStateToProps)(Answers)
