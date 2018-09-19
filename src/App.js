import React from 'react'
import './animations.css'
import {withStore} from './Store'
import Slider from './Slider'
import DropDown from './Selector/DropDown'

const App = ({pictures}) =>
  <div className="App">
    <Slider slides={pictures}/>
    <DropDown />
  </div>

export default withStore(App)
