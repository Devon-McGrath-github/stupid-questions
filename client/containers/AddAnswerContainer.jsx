import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AddAnswer from '../components/AddAnswer'
import { addAnswer } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addAnswer }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddAnswer)
