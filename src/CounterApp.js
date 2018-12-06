import React, { Component } from "react"
// 7.
import { connect } from 'react-redux'

class CounterApp extends Component {
  /*constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }*/
  // the ABOVE is the same as the BELOW
// 9. can be remove b/c we are now mapping our state from the store 
  /*state = {
    counter: 0
  }*/

// 13.
// we can remove the methods as they will be redone in mapDispatchToProps()
  /*increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 })
  }*/

  render() {
// 12.
// change {() => this.increaseCounter()} to {() => this.props.increaseCounter()}>
    return (
      <div>
        <button onClick={() => this.props.increaseCounter()}>Increase</button>
        <h2>{this.props.counter}</h2>
        <button onClick={() => this.props.decreaseCounter()}>Decrease</button>
      </div>
    )
  }
}

// 6.
// to allow complete access to the Store in CounterApp we need to map the 
// state to the props, which takes an argument of state. It's getting the 
// state.counter from the store and mapping it to a prop called counter
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

// 10.
// Pass in Actions to modify the state
function mapDispatchToProps(dispatch) {
  // the Actions are dispatched to the Reducer
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
  }
}

// 8.
// connect mapStateToProps to CounterApp
// 11.
// connect mapDispatchToProps to CounterApp
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
