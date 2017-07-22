import createStore from './createStore.enhancer'

const initialState = { counter: 0, myName: 'Sebastião' }

const INCREMENT = 'INCREMENT'
const CHANGE_MY_NAME = 'CHANGE_MY_NAME'

const incrementAction = {
  type: INCREMENT,
  payload: 1
}

const changeMyNameAction = value => {
  return { type: CHANGE_MY_NAME, payload: value }
}

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    const incrementedCounter = state.counter + action.payload
    return { ...state, counter: incrementedCounter }
  }

  if (action.type === CHANGE_MY_NAME) {
    return { ...state, myName: action.payload }
  }
  return state
}

const enhancer = createStore => (reducer, initialState) => {
  const store = createStore(reducer, initialState)

  const dispatcherWithLogger = (action) => {
    console.group(action.type)

    console.log('ACTION: ', action)

    console.log('STATE BEFORE: ', store.getState())
    const resultAction = store.dispatch(action)
    console.log('STATE AFTER: ', store.getState())

    console.groupEnd(action.type)

    return resultAction
  }

  return { ...store, dispatch: dispatcherWithLogger }
}

const store = createStore(reducer, initialState, enhancer)

store.subscribe(() => {
  const state = store.getState()
  document.querySelector('#counter').innerHTML = state.counter
  document.getElementById('myname').innerHTML = state.myName
})

document.getElementById('increment')
  .addEventListener('click', event => store.dispatch(incrementAction))

document.getElementById('myname-input')
  .addEventListener('keyup', event => {
    const value = event.srcElement.value
    store.dispatch(changeMyNameAction(value))
  })
