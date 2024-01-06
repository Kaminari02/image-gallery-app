import React, { useEffect, useState } from 'react';
import './Home.css'
import { IPhoto } from '../../interfaces/IPhoto';
import axios from 'axios';
import ImageCard from '../../components/ImageCard/ImageCard';

function Home() {

    const accessKey = 'xmPeytWKSUHPjnJBeaUUY2jlvRZEyFo-yb8hZK1QZvU';
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const getPhotos = async () => {
        try {
            const response = await axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=9&client_id=${accessKey}`);
            setPhotos((prevState) => [...prevState, ...response.data]);
            setIsLoading(false);
            console.log(page)
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPhotos();
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setIsLoading(true);
            setPage((prevState) => prevState + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            {/* Search Block */}
            <div className='search_container'>
                <div className='search_box container'>
                    <form className='input_block'>
                        <input type="text" className='search_input' placeholder='Поиск' />
                        <button className='search_btn'>
                            <img className='search_icon' src="src/assets/search_icon_black.png" alt="search_icon" />
                        </button>
                    </form>
                </div>
            </div>
            <div className='divider'></div>
            {/* Photos Block */}
            <div className='gallery container'>
                {photos && photos.map((item) => {
                    return (
                        <ImageCard imgSource={item.urls.regular} alt={item.alt_description} key={item.id + Math.random()} />
                    )
                })}
            </div>
            {isLoading && <div className='container loader_box'>
                <span className="loader"></span>
            </div>}

            <button className='scroll_btn' onClick={scrollToTop}>
                <i className='arrow_ic'></i>
            </button>
        </div>
    )
}

export default Home;