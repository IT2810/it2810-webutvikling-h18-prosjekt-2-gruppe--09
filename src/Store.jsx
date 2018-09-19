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
    categories: [
      {
        id: 1,
        name: "abstract"
      },
      {
        id: 2,
        name: "city"
      },
      {
        id: 3,
        name: "landscape"
      }
    ],
    types: [
      {
        id: 1,
        name: "picture"
      },
      {
        id: 2,
        name: "text"
      },
      {
        id: 3,
        name: "sound"
      }
    ],
    categories: {
      picture: [
        {
          id: 1,
          name: "abstract"
        },
        {
          id: 2,
          name: "city"
        },
        {
          id: 3,
          name: "landscape"
        }
      ],
      text: [
        {
          id: 1,
          name: "poem"
        },
        {
          id: 2,
          name: "quote"
        },
        {
          id: 3,
          name: "text3"
        }
      ],
      sound: [
        {
          id: 1,
          name: "abstract"
        },
        {
          id: 2,
          name: "city"
        },
        {
          id: 3,
          name: "landscape"
        }
      ]
    },
    selected: {
      picture: 1,
      text: 1,
      sound: 1
    }
  }

  componentDidMount() {
    // Fetch data
    fetch("./db/data.json")
      .then(res => res.json())
      .then(data => this.setState(data))
  }

  testFunction = () => console.log("Test function works")

  handleDropDown = ({target:{
    value, name
  }}) => this.setState(({selected}) => ({selected: {
    ...selected,
    [name]: parseInt(value, 10)
  }}))

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