import React from 'react';
import './LockerOptionsActive.css';

const LockerOptionsActive = (props) => {

    const handleDisplaySwitch = () => {
        props.changeHandler(false)
      }

    return ( 
        <div className="locker-options">
            <h1 className='locker-options__header'>Rzeczy paczkomatowe</h1>
            <button 
                onClick={handleDisplaySwitch}
                className='locker-options__button--showState'>Wróć</button>
        </div>
     );
}
 
export default LockerOptionsActive;