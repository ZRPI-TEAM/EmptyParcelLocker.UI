import React from 'react';
import './LockerOptions.css';

const LockerOptions = () => {
    return ( 
        <div className="locker-options">
            <div className="locker-options__display">
                <h1 className='locker-options__header'>Wybrany paczkomat:</h1>
                <h2 className='locker-options__chosen'>Nazwa paczkomatu</h2>
                <button className='locker-options__button--showState'>Pokaż stan paczkomatu</button>
            </div>
        </div>
     );
}
 
export default LockerOptions;