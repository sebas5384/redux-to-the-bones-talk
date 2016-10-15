function createStore(reducer, initialState = {}, enhancer) {

  let currentState = initialState
  let currentListeners = []

  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, currentState)
  }

  const dispatch = action => {
    currentState = reducer(currentState, action)

    currentListeners.forEach(listener => listener())

    return action
  }

  const getState = () => currentState

  const subscribe = listener => {
    currentListeners = currentListeners.concat(listener)
  }

  return {
    dispatch,
    getState,
    subscribe
  }
}

export default createStore
