import React from 'react'

const Slide = ({
  picture, text, sound
}) =>

  <div className="slide">
    {picture ?
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={picture.url}
        />
        <img
          alt={picture.category}
          src={picture.url}
        />
      </picture> : "No picture"
    }
    {text ?
      <div className="slide-text">
        <blockquote><p>{text.text}</p></blockquote>
        <cite>– {text.author}</cite>
      </div> :
      "No text"
    }
    <audio controls>
      <source
        src={sound || ""}
        type="audio/mp3"
      />
      Your browser does not support the audio tag.
    </audio>
  </div>

export {Slide}