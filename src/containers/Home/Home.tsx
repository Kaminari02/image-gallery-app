import React from 'react';
import './Home.css'

function Home() {
  return (
    <div>
        {/* Search Block */}
        <div className='search_container'>
            <div className='search_box container'>
                <form className='input_block'>
                    <input type="text" className='search_input' placeholder='Поиск'/>
                    <button className='search_btn'>
                        <img className='search_icon' src="src/assets/search_icon_black.png" alt="search_icon" />
                    </button>
                </form>
            </div>
        </div>
        <div className='divider'></div>
    </div>
  )
}

export default Home;