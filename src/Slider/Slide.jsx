import React from 'react'

const Slide = ({
  picture, text, sound
}) =>
  <div className="slide">
    {picture ?
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={picture && picture.url}
        />
        <img
          alt={picture.category}
          src={picture && picture.url}
        />
      </picture> : "No picture"
    }
    <p>{text || "No text"}</p>
    {sound ?
      <audio>
        <source
          src={sound}
          type="audio/mp3"
        />
      Your browser does not support the audio tag.
      </audio> : "No audio"
    }
  </div>

export {Slide}