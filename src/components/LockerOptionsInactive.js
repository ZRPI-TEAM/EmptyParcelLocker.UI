import React, { useState, useEffect, useRef} from 'react';
import './LockerOptionsInactive.css';
  
const LockerOptionsInactive = (props) => {

    const [counter, setCounter] = useState(0);

    const handleDisplaySwitch = async() => {
      props.changeHandler(true);

      fetch(`http://localhost:5033/Locker/${props.chosenLockerID}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
       props.setLockerStatus(data)
      })
  }



  // Z jakiegoś powodu to nie liczy tych skrytek jak chciałem 
    
  // Tutaj jest funkcja
   
  const fun = () => {
    if(typeof props.lockerStatus === 'undefined') return;
    else{
    props.lockerStatus.forEach(obj => {
        if(obj.isEmpty === true) {
            if(obj.lockerType.name === "small") props.setSmall(props.small+1)
            else if(obj.lockerType.name === "medium") props.setMedium(props.medium+1)
            else if(obj.lockerType.name === "large") props.setLarge(props.large+1)
        }
    });
  }}

  // Tutaj ją wywołuję 

  useEffect(() => {
    fun()
    },props.lockerStatus);

    return ( 
        <div className="locker-options">
            <div className="locker-options__display">
                <h1 className='locker-options__header'>Wybrany paczkomat:</h1>
                <h2 className='locker-options__chosen'>{props.chosenLockerName}</h2>
                <button 
                onClick={handleDisplaySwitch}
                className='locker-options__button--showState'>Pokaż stan paczkomatu</button>
            </div>
        </div>
     );
}
 
export default LockerOptionsInactive;