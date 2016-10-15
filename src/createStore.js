function createStore(reducer, initialState = {}) {

  let currentState = initialState
  let currentListeners = []

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
