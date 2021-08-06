import React from 'react';
import Carditem from '../Carditem';

export default function Services(){
    return (
    <div>
        <h1>We help you save money on hostels! </h1>
         <ul className='cards-items'>   
                    <Carditem src='Images/img-3.jpg'
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                    />
                    <Carditem src='Images/img-4.jpg'
                       text='Experience Football on Top of the Himalayan Mountains'
                        label='Adventure'
                        path='/services'
                    />
                    <Carditem src='Images/img-8.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adventure'
                        path='/services'
                    />
                </ul> 
        
    </div>
    )   
}