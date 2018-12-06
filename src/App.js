import React, { Component } from "react"
// 1.
import { createStore } from 'redux'
// 5.
import { Provider } from 'react-redux'
import CounterApp from './CounterApp'

/*
  Store
    - holds our state - THERE IS ONLY EVER ONE STORE
  Action(ACTION_TYPE)
    - State can only be modified using actions, however, Actions can't 
    directly modify the store. Actions must go through a Reducer in order
    to modify the Store.
      -- SIMPLE OBJECTS
  Dispatcher
    - Action needs to be sent by someone 
      -- know as dispatching an action
  Reducer
    - Receives the action and modifies the state to give us a new state. It's
    nothing but a function that receives an Action, modifies the state, and
    gives us a new state. The state is only copied and modified
      -- the only mandatory argument is the type (ACTION_TYPE)
  Subscriber
    - Listens for state-change to update the UI (using Connect)
*/
/*
  I. We have the Store
  II. We have an Action that can modify the Store
  III. The Action is sent (by a click or something) by the Dispatcher to the Reducer
  IV. The Reducer modifies the Store and returns us an updated state.
*/

// 4.
// for the Reducer to be able to modify the state it needs to have access to 
// the initial state, so pass the initial state (initialState) to the Reducer
const initialState = {
  counter: 0
}

// 3.
// the Reducer
//  - can modify our Store, but only when an Action is passed to it as the
//  second argument
// 15.
// add the 2nd argument to the Reducer -- action, then we run a switch statement
// to check the Action type (action.type), and if a case is matched, we either
// increase or decrease the state counter
const reducer = (state = initialState,action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER': return { counter: state.counter + 1 }
    case 'DECREASE_COUNTER': return { counter: state.counter - 1 }
    default: break
  }
  return state
}

// 2.
// the Store:
//  - needs a Reducer to be able to access it and modify the state
//  - so need to pass it the Reducer as an argument
const store = createStore(reducer)

class App extends Component {
  // 6.
  // pass our Store to the Provider to connect our Store to React
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    )
  }
}

export default App
