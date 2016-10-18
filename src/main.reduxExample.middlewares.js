import { createStore, applyMiddleware } from 'redux'

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

// Middlewares.
const loggerMiddleware = ({ getState, dispatch }) => next => action => {
  // console.log('--- logger ---')
  // console.log(action)

  console.log(getState())

  const nextResult = next(action)

  console.log(getState())


  return nextResult
}

const otherLoggerMiddleware = ({ getState, dispatch }) => next => action => {
  console.log('--- other logger ---')
  console.log(action)
  return next(action)
}

const enhancer = applyMiddleware(loggerMiddleware, otherLoggerMiddleware)

const store = createStore(reducer, initialState, enhancer)

store.subscribe(() => {
  document.querySelector('#counter').innerHTML = store.getState().counter
})

document.getElementById('increment')
  .addEventListener('click', event => store.dispatch(incrementAction))
