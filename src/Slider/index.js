import React, {Component} from 'react'
import {ImgSlide} from './Slide'
import './slider.css'

export default class Slider extends Component {

  state = {
    positionX: 0,
    shouldSnap: false,
    activeSlideIndex: 0,
    intervalId: null
  }


  componentDidMount() {this.setTicker()}

  componentWillUnmount() {this.clearTicker()}


  ticker = () => this.handleSlide()

  setTicker = () => this.setState({intervalId: setInterval(this.ticker, 10000)})

  clearTicker = () => clearInterval(this.state.intervalId)


  handleTouchStart = e => {
    this.clearTicker()
    const {positionX} = this.state
    const width = window.innerWidth
    this.setState({
      startX: positionX === width ? width : e.touches[0].pageX,
      shouldSnap: false
    })
  }

  handleTouchEnd = () => {
    const {positionX} = this.state
    const width = window.innerWidth
    this.setState({
      positionX: positionX > width/3 ? width : 0,
      shouldSnap: true
    }, () => this.state.positionX !== 0 && this.handleSlide())
    this.setTicker()
  }

  handleTouch = e => {
    this.setState({positionX: this.state.startX-e.touches[0].pageX})
  }

  handleSlide = _e => {
    this.clearTicker()
    this.setState(({activeSlideIndex: prevIndex}) =>
      ({activeSlideIndex: prevIndex+1 >= this.props.slides.length ? 0 : prevIndex+1})
      , this.setTicker
    )
  }

  render() {
    const {slides} = this.props
    const {
      positionX, shouldSnap, activeSlideIndex
    } = this.state

    return(
      <div className="slider-container">
        <ul className="slider">
          {slides.map((slide, index) => {
            const isFirst = index === activeSlideIndex
            return (
              <li
                className={!isFirst ? "placeholder-slide" : "first-slide"}
                key={index}
                style={{zIndex: isFirst ? 99 : 10-index}}
              >
                <ImgSlide
                  {...slide}
                  style={{
                    transform: isFirst ? `translateX(${-positionX}px)` : "none",
                    transition: (isFirst && shouldSnap) ? ".625s" : "0s"
                  }}
                />
              </li>
            )
          }
          )}
        </ul>
        <div className="slider-dots">
          {Array(slides.length).fill(null).map((_key, index) =>
            <span
              className={`slider-dot ${activeSlideIndex===index ? "active-slide": ""}`}
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