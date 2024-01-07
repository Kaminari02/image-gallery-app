import React from 'react'
import ImageCard from '../../components/ImageCard/ImageCard';
import { IPhoto } from '../../interfaces/IPhoto';
import './Favorites.css'
import { NavLink } from 'react-router-dom';

function Favorites() {

    const favoritesString = localStorage.getItem("favorites");
    const favoritesArray = favoritesString ? JSON.parse(favoritesString) : [];

    return (
        <div>
            <div className='divider'></div>
            <h1 className='favorites_title'>Избранное</h1>
            {favoritesArray.length === 0 ?
                    <p style={{fontSize: 20, fontWeight: 600, textAlign: 'center'}}>Нет избранных картинок. <NavLink to='/' style={{color: 'green'}}>Добавить..</NavLink></p>
            : null}
            <div className='gallery container fav_box'>
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