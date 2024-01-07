import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import PhotoPage from '../containers/PhotoPage/PhotoPage';
import Favorites from '../containers/Favorites/Favorites';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/photos/:id' element={<PhotoPage />}/>
            <Route path='/favorites' element={<Favorites />}/>
        </Routes>
    )
}

export default Router;