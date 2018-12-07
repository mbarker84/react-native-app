import { connect } from 'react-redux'
import ResultComponent from '../components/Result'
import { resetAnswer } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    food: state.answerStore.answers[1],
    color: state.answerStore.answers[2],
    description: state.answerStore.answers[3],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: value => {
      dispatch(resetAnswer())
    }
  }
}

const Result = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultComponent)

export default Result

