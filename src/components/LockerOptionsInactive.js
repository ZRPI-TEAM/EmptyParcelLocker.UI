import React from 'react';
import './LockerOptionsInactive.css';

const LockerOptionsInactive = (props) => {

    const handleDisplaySwitch = () => {
      props.changeHandler(true)
    }

    return ( 
        <div className="locker-options">
            <div className="locker-options__display">
                <h1 className='locker-options__header'>Wybrany paczkomat:</h1>
                <h2 className='locker-options__chosen'>{props.chosenLocker}</h2>
                <button 
                onClick={handleDisplaySwitch}
                className='locker-options__button--showState'>Pokaż stan paczkomatu</button>
            </div>
        </div>
     );
}
 
export default LockerOptionsInactive;