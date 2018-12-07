import { connect } from 'react-redux'
import QuizComponent from '../components/Quiz'

const mapStateToProps = (state) => {
  return {
    answers: state.answerStore.answers
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const Quiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizComponent)

export default Quiz

