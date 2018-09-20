import React from 'react'
import './animations.css'
import Slider from './Slider'
import DropDown from './Selector/DropDown'

const App = () =>
  <div className="App">
    <h1>Welcome to our gallery!</h1>
    <DropDown/>
    <Slider/>
  </div>

export default App
