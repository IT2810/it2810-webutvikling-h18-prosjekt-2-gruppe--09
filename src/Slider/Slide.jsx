import React from 'react';

const ImgSlide = ({
  url, category
}) =>
  <picture>
    <source
      media="(min-width: 768px)"
      srcSet={url}
    />
    <img
      alt={category}
      src={url}
    />
  </picture>

export {ImgSlide}