import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IPhoto } from '../../interfaces/IPhoto';
import { accessKey } from '../../common/constants';
import './PhotoPage.css'

function PhotoPage() {

    const { imageId } = useParams();

    const [photo, setPhoto] = useState<IPhoto>()

    const getPhoto = async () => {
        try {
            // const response = await axios.get(`https://api.unsplash.com/photos/${imageId}?client_id=${accessKey}`);
            const response = await axios.get(`https://api.unsplash.com/photos/9mmWQQcAZwQ?client_id=${accessKey}`);
            setPhoto(response.data);
        } catch (error) {
            console.error(error);
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
                        <div className='photo_header'>
                            <div className='user_box'>
                                <img className='avatar_img' src={photo.user.profile_image.medium} alt="user profile photo" />
                                <div>
                                    <p className='username_text'>{photo.user.first_name} {photo.user.last_name}</p>
                                    <p className='social_username'>@{photo.user.instagram_username}</p>
                                </div>
                            </div>
                            <div className='btn_box'>
                                <button className='add_fav_btn'>
                                    <i className='fav_ic'></i>
                                </button>
                                <button className='download_btn'>
                                    <i className='download_ic'></i>
                                    <span className='download_btn_text'>Download</span>
                                </button>
                            </div>
                        </div>
                        <div className='photo_box'>
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