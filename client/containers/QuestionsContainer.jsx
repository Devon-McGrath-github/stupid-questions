import { connect } from 'react-redux'

import Questions from '../components/Questions'

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Questions)
