import React from 'react'

const Slide = ({
  picture, text, sound, ...props
}) =>
  <li
    {...props}
  >
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
    {sound ?
      <audio controls>
        <source
          src={sound.url || ""}
          type={sound.type}
        />
        Your browser does not support the audio tag.
      </audio> :
      "No audio"
    }
  </li>

export {Slide}