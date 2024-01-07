import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IPhoto } from '../../interfaces/IPhoto';
import { accessKey } from '../../common/constants';
import './PhotoPage.css'

function PhotoPage() {

    const { id } = useParams();

    const [photo, setPhoto] = useState<IPhoto>();
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const getPhoto = async () => {
        try {
            const response = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=${accessKey}`);
            setPhoto(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const downloadImage = async () => {
        try {
            if (photo) {
                setIsLoading(true)
                const response = await axios.get(`${photo.links.download_location}&client_id=${accessKey}`);
                const imageUrl = response.data.url
                const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
                const blob = new Blob([imageResponse.data], { type: 'image/jpeg' });
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = photo.id + '.jpg'
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                setIsLoading(false)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const showAlert = () => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    }

    const saveToFavorites = () => {
        if (photo) {
            const favoritesString = localStorage.getItem("favorites");
            const favoritesArray = favoritesString ? JSON.parse(favoritesString) : [];
            if (!favoritesArray.some((favPhoto: IPhoto) => favPhoto.id === photo.id)) {
                const { id, urls, user, alt_description, links } = photo;
                const photoProps = { id, urls, user, alt_description, links };
                favoritesArray.push(photoProps);
                localStorage.setItem("favorites", JSON.stringify(favoritesArray));
                setIsAdded(true);
            } else {
                showAlert();
            }
        }
    }

    useEffect(() => {
        getPhoto()
    }, [])

    return (
        <>
            {photo &&
                <div className='photo_page_container'>
                    <div className='bg_container'>
                        <img className='photo_img_bg' src={photo.urls.regular} alt={photo.alt_description} />
                    </div>
                    <div className='photo_container container'>
                        {/* Alert */}
                        <div className={`alert ${isVisible ? 'visible' : 'hidden'}`}>
                            <span className="close_btn" onClick={() => setIsVisible(false)}>&times;</span>
                            Картинка уже в избранном
                        </div>
                        {/* Photo Header */}
                        <div className='photo_header'>
                            <div className='user_box'>
                                <img className='avatar_img' src={photo.user.profile_image.medium} alt="user profile photo" />
                                <div>
                                    <p className='username_text'>{photo.user.first_name} {photo.user.last_name}</p>
                                    <p className='social_username'>
                                        {photo.user.instagram_username ?
                                            '@' + photo.user.instagram_username :
                                            photo.user.twitter_username ?
                                                '@' + photo.user.twitter_username : null
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className='btn_box'>
                                <button onClick={saveToFavorites} className='add_fav_btn'>
                                    <i className='fav_ic'></i>
                                </button>
                                <button onClick={downloadImage} className='download_btn'>
                                    <i className='download_ic'></i>
                                    <span className='download_btn_text'>Download</span>
                                </button>
                            </div>
                        </div>
                        {/* Photo Body */}
                        <div className='photo_box'>
                            {isLoading && <div className='loader_position'>
                                <span className="download_loader"></span>
                            </div>}
                            <img className='photo_box_img' src={photo.urls.regular} alt={photo.alt_description} />
                            <i className='maximize_ic'></i>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PhotoPage;