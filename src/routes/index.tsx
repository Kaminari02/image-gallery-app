import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import PhotoPage from '../containers/PhotoPage/PhotoPage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/photos/:id' element={<PhotoPage />}/>
        </Routes>
    )
}

export default Router;