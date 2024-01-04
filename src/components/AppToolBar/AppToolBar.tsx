import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppToolBar.css'

function AppToolBar() {
    return (
        <header className='header'>
            <div className='header_content container'>
                <NavLink to='/'>
                    <div className='header_logo'></div>
                </NavLink>
                <div className='btn_group'>
                    <NavLink to='/search'>
                        <div className='search_logo'></div>
                    </NavLink>
                    <NavLink to='/favorites'>
                        <div className='favorites_logo'></div>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default AppToolBar;