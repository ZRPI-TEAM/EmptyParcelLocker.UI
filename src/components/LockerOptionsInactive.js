import React from 'react';
import './LockerOptionsInactive.css';
  
const LockerOptionsInactive = (props) => {

  const url = `http://localhost:5033/Locker/${props.chosenLockerID}`;

  // Fetching data specific to chosen parcel locker

  const fetching = async() => {
    await fetch(url)
    .then(response => {
      if(response.ok) {
        console.log("sukces");
      }
      else console.log("porazka");
      return response.json()
    })
    .then(data => {
    props.setLockerStatus(data);
    countFreeLockers(data) 
    })
  }

    const handleDisplaySwitch = async() => {

      fetching();
      props.changeHandler(true);

  }

  // Those three hold onfo about lockers until it is passed to the state

  let small = 0;
  let medium = 0;
  let large = 0;

  // This function helps with passing info to each respective state

  const appendStateChange = () => {
    props.setSmall(small);
    props.setMedium(medium);
    props.setLarge(large);
  }

  // This counts free lockers
   
  const countFreeLockers = (lockerStatus) => {
    if(typeof lockerStatus === 'undefined') return;
    else{
    lockerStatus.forEach(obj => {
        if(obj.isEmpty === true) {
            if(obj.lockerType.name === "small") small = small+1;
            if(obj.lockerType.name === "medium") medium = medium+1;
            if(obj.lockerType.name === "large") large = large+1;
        }
    });
    appendStateChange();
  }}

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