import { connect } from 'react-redux'
import QuestionComponent from '../components/Question'
import { addAnswer } from '../actions/actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: value => {
      dispatch(addAnswer(value))
    }
  }
}

const Question = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent)

export default Question