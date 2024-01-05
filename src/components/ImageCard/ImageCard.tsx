import React from 'react';
import './ImageCard.css'

interface ImageCardProps {
    imgSource: string;
    alt: string;
}

function ImageCard( {imgSource, alt}: ImageCardProps ) {
  return (
    <div className='card'>
        <img src={imgSource} alt={alt}  className='imageCard'/>
    </div>
  )
}

export default ImageCard;