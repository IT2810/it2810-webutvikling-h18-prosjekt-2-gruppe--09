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
    picture: 1,
    categories: [
      {id: 1,
      name: "abstract"},
      {id: 2,
      name: "city"},
      {id: 3,
      name: "landscape"}
      
    ]
  }

  componentDidMount() {
    // Fetch data
    fetch("./db/data.json")
      .then(res => res.json())
      .then(data => this.setState(data))
  }

  testFunction = () => console.log("Test function works")

  handleDropDown = ({target:{value, name}}) => this.setState({[name]: value}) 

  render() {
    return(
    <Store.Provider
      value={{
        testFunction: this.testFunction,
        handleDropDown: this.handleDropDown,
        ...this.state
      }}
    >
      {this.props.children}
    </Store.Provider>
    )
  }
}