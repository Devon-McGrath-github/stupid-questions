import { connect } from 'react-redux'

import QuestionsComponent from '../components/Questions'


const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AddQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsComponent)

export default AddQuestionContainer
v
