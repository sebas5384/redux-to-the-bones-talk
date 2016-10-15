let currentState = { counter: 1 }

const INCREMENT = 'INCREMENT'

const incrementAction = {
  type: INCREMENT,
  payload: 1
}

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    const incrementedCounter = state.counter + action.payload
    return { counter: incrementedCounter }
  }
  return state
}

const dispatch = action => {
  currentState = reducer(currentState, action)
  listener()
  return action
}

const listener = () => {
  document.querySelector('#counter').innerHTML = currentState.counter
}

dispatch(incrementAction)

console.log(currentState)

document.getElementById('increment')
  .addEventListener('click', event => dispatch(incrementAction))
