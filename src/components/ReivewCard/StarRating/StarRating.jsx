import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function StarRating({ rating, onSetRating }) {
    const radioConfigs = onSetRating ? {onClick: onRadioBtnClick}: {}

    function onRadioBtnClick(e) {
        onSetRating(e.target.value);
    }

    return (
        <>
            {[...Array(5)].map((_, index) => {
                const ratingIndex = index + 1;

                return <label key={uuidv4()}>
                    <input 
                        type="radio" 
                        name='rating'
                        style={{"display": "none"}} 
                        value={ratingIndex} 
                        {...radioConfigs} />
                    <FaStar
                        size={25} 
                        color={(ratingIndex) <= rating ? "#ffc107" : "#e4e5e9"} 
                        />
                </label>
            })}
        </>
    );
}

export default StarRating;