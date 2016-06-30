import { connect } from 'react-redux'

import AddQuestion from '../components/Add-question'


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
)(AddQuestion)

export default AddQuestionContainer
