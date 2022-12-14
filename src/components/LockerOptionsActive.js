import React from 'react';
import './LockerOptionsActive.css';

const LockerOptionsActive = (props) => {

    const handleDisplaySwitch = () => {
        props.changeHandler(false);
        props.setSmall(0);
        props.setMedium(0);
        props.setLarge(0);
      }

    return ( 
        <div className="locker-options">
            <div className="locker-options__display">
                <h1 className='locker-options__header'>Rzeczy paczkomatowe</h1>

                <div className="locker-options__available">
                    <h2 className="locker-options__available--header">
                        Dostępne skrytki:
                    </h2>
                    <h3 className="locker-options__available--small">
                        Małe: {props.small}
                    </h3>
                    <h3 className="locker-options__available--medium">
                        Średnie: {props.medium}
                    </h3>
                    <h3 className="locker-options__available--large">
                        Duże: {props.large}
                    </h3>
                </div>

                <button 
                    onClick={handleDisplaySwitch}
                    className='locker-options__button--showStateActive'>Wróć
                </button>
            </div>
        </div>
     );
}
 
export default LockerOptionsActive;