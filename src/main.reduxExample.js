import { createStore } from 'redux'

const initialState = { counter: 0 }

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

const store = createStore(reducer, initialState)

store.subscribe(() => {
  document.querySelector('#counter').innerHTML = store.getState().counter
})

document.getElementById('increment')
  .addEventListener('click', event => store.dispatch(incrementAction))
