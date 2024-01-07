import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageCard.css';

interface ImageCardProps {
    imgSource: string;
    alt: string;
    imageId: string;
}

function ImageCard( {imgSource, alt, imageId}: ImageCardProps ) {

const navigate = useNavigate();

  return (
    <div className='card' onClick={() => {navigate(`/photos/${imageId}`)}}>
        <img src={imgSource} alt={alt}  className='imageCard'/>
    </div>
  )
}

export default ImageCard;