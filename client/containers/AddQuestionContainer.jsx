import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AddQuestion from '../components/AddQuestion'
import { addQuestion } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: bindActionCreators({ addQuestion }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddQuestion)
