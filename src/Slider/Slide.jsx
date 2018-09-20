import React, {Component} from 'react'

export default class Slide extends Component {
  state = {
    isActive: false,
    picture: null
  }

  componentDidMount() {
    this.props.isActive && this.fetchSVG(this.props.picture)
  }

  componentDidUpdate = ({
    isActive: prevIsActive, picture: prevPicture
  }) => {
    const {
      isActive, picture
    } = this.props

    if ((!prevIsActive && isActive) || (prevPicture.category !== picture.category && isActive))
      this.fetchSVG(picture)
  }

  fetchSVG = picture =>
    fetch(`./img/${picture.category}/${picture.filename}.svg`)
      .then(r => r.text())
      .then(picture => this.setState({picture}))


  render() {
    const {
      index, isActive, text, sound
    } = this.props

    const {picture} = this.state
    return (
      <li
        className={`slide ${isActive ? "first-slide" : "placeholder-slide"}`}
        style={{zIndex: isActive ? 99 : 10-index}}
      >
        <span dangerouslySetInnerHTML={{__html: picture || "Loading..."}}/>
        {text ?
          <div className="slide-text">
            <blockquote><p>{text.text}</p></blockquote>
            <cite>– {text.author}</cite>
          </div> :
          "No text"
        }
        {sound ?
          <audio
            controls
            /**
             * HACK: Add key to update audio when changing the src.
             * @see https://github.com/facebook/react/issues/9447
             */
            key={`${sound.category}/${sound.filename}`}
          >
            <source
              src={`./sounds/${sound.category}/${sound.filename}.${sound.type.replace("audio/", "")}`}
              type={sound.type}
            />
        Your browser does not support the audio tag.
          </audio> :
          "No audio"
        }
      </li>
    )
  }
}

