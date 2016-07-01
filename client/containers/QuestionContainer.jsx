import { connect } from 'react-redux'

import Question from '../components/Question'

const mapStateToProps = (state, ownProps) => {
  const question = state.questions.filter((question) => {
    return question.id === parseInt(ownProps.params.id)
  })[0]

  const answers = state.answers.filter((answer) => {
    return answer.questionId === parseInt(ownProps.params.id)
  })

  return {
    question: question,
    answers: answers
  }
}

export default connect(mapStateToProps)(Question)
