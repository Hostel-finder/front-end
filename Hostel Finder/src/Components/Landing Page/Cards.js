import React from 'react'
import Carditem from './Carditem'
import './Cards.css';
function Cards() {
  
    return (
        <>
        <div className='cards' >
            <h1>What are you looking for</h1>
            <div className='cards-container'>
                <ul className='cards-items'>
                    <Carditem src='Images/boy.png'
                        text='Find the Best Boys Hostel in Raebareli'
                        label='Adventure'
                        path='/services'
                    />
                    <Carditem src='Images/girl.png'
                        text='Find the Best Girls Hostel in Raebareli'
                        label='Luxury'
                        path='/services'
                    />
                </ul>    
                
            </div>
        </div>
        </>
       
    )
}

export default Cards;
