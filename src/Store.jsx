import React, {Component, createContext} from 'react'

const Store = createContext()

/**
 * Makes the Database values available to the WrappedComponent
 * @param {Component} WrappedComponent The component to pass the Database values to
 * @returns {Component} Component with the Database values
 */
export const withStore = WrappedComponent =>
  class extends Component {
    render() {
      return (
        <Store.Consumer>
          {value =>
            <WrappedComponent
              {...value}
              {...this.props}
            />
          }
        </Store.Consumer>
      )
    }
  }


export default class Database extends Component {
  state = {
    pictures: [],
    texts: [],
    sounds: [],
    // Global state
    testState: "Test state works"
  }

  componentDidMount() {
    // Fetch data
    fetch("./db/data.json")
      .then(res => res.json())
      .then(data => this.setState(data))
  }

  testFunction = () => console.log("Test function works")

  render() {
    return(
      <Store.Provider
        value={{
          testFunction: this.testFunction,
          ...this.state
        }}
      >
        {this.props.children}
      </Store.Provider>
    )
  }
}