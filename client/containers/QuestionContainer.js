import { connect } from 'react-redux'

import Question from '../components/Question'

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

const BoardContainer = connect(
  mapStateToProps
)(Question)

export default BoardContainer
