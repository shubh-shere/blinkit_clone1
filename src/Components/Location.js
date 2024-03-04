import React from 'react';

const Location = ({location}) => {
  return (
    
    <>
      <div className='background-popup'>
        <div className='loaction-body'>
        <span onClick={location}>
            <i className="fa-solid fa-close"></i>
        </span>
        <div className='change_location'>
            <p>Change Location</p>
        </div>
        <div className='direction'>
            <form>
                <button className='direction-btn'>
                Detect my location
                </button>
                <p className='or_location'>OR</p>
                <input type='text'className='form-control' id='location-seacrh' name='search-location' placeholder='search delivery location' autocomplete="off"/>
            </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default Location