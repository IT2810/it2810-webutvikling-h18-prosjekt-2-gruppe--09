import React from 'react';
import './animations.css';
import { withStore } from './Store';
import Slider from './Slider';

const App = ({pictures}) =>
  <div className="App">
    <Slider slides={pictures}/>
  </div>

export default withStore(App);
