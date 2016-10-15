// const currentState = { counter: 0 }
// const increment = (state, payload) => {
//   return { counter: state.counter + payload }
// }

const currentState = 1

const increment = (state, payload) => state + payload

// Reducer.
const newState = increment(currentState, 1)

console.log('Previous State', currentState)

console.log('State changed? ', currentState !== newState)

console.log('New State', newState)
