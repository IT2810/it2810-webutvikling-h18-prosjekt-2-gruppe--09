import React, {Component} from 'react'
import Slide from './Slide'
import './slider.css'
import {withStore} from '../Store'


class Slider extends Component {
  state = {
    activeIndex: 0,
    slides: []
  }

  componentDidUpdate(prevProps) {
    const {categories} = this.props
    let {
      selected, pictures, texts, sounds
    } = this.props

    if (prevProps.pictures !== pictures || prevProps.texts !== texts || prevProps.sounds !== sounds || prevProps.selected !== selected) {
      selected = Object
        .entries(selected)
        .map(([selectedKey, selectedValue]) =>
          categories[selectedKey].find(category => selectedValue === category.id).name
        )

      pictures = pictures.filter(picture => picture.category === selected[0])
      texts = texts.filter(text => text.category === selected[1])
      sounds = sounds.filter(sound => sound.category === selected[2])
      const slides = Array(4).fill(null).map((_e, index) => ({
        picture: pictures[index],
        text: texts[index],
        sound: sounds[index]
      }))
      this.setState({slides})
    }
  }

  handleSlide = _e =>
    this.setState(({activeIndex}) =>
      ({activeIndex: activeIndex+1 < 4 ? activeIndex+1 : 0})
    )

  render() {
    const {
      slides, activeIndex
    } = this.state
    return(
      <div className="slider-container">
        <ul className="slider">
          {slides.map((slide, index) =>
            <Slide
              index={index}
              isActive={index === activeIndex}
              key={index}
              {...slide}
            />
          )}
        </ul>
        <div className="slider-dots">
          {slides.map((_key, index) =>
            <span
              className={`slider-dot ${activeIndex===index ? "active-dot": ""}`}
              key={index}
            >•</span>
          )}
        </div>
        <div
          className="button slider-next-btn"
          onClick={this.handleSlide}
        >▶</div>
      </div>
    )
  }
}


export default withStore(Slider)