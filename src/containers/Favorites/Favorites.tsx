import React from 'react'
import ImageCard from '../../components/ImageCard/ImageCard';
import { IPhoto } from '../../interfaces/IPhoto';
import './Favorites.css'

function Favorites() {

    const favoritesString = localStorage.getItem("favorites");
    const favoritesArray = favoritesString ? JSON.parse(favoritesString) : [];
    
    return (
        <div>
            <div className='divider'></div>
            <h1 className='favorites_title'>Избранное</h1>
            <div className='gallery container'>
                {favoritesArray && favoritesArray.map((item: IPhoto) => {
                    return (
                        <ImageCard
                            imageId={item.id}
                            imgSource={item.urls.regular}
                            alt={item.alt_description}
                            key={item.id + Math.random()} />
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites;