export const ADD_ANSWER = 'ADD_ANSWER'
export const RESET_ANSWER = 'RESET_ANSWER'

export function addAnswer(value) {
  return { type: ADD_ANSWER, value }
}

export function resetAnswer() {
  return { type: RESET_ANSWER }
}

