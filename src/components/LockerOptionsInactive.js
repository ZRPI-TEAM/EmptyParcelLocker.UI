import React from 'react';
import './LockerOptionsInactive.css';
  
const LockerOptionsInactive = (props) => {

  const url = `http://localhost:5033/Locker/${props.chosenLockerID}`;

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
    fun(data) 
    })
  }
    

    const handleDisplaySwitch = async() => {

      fetching();
      // fun();
      props.changeHandler(true);

  }



  // Z jakiegoś powodu to nie liczy tych skrytek jak chciałem 
    
  // Tutaj jest funkcja
   
  const fun = (lockerStatus) => {
    console.log("fun lata");
    if(typeof lockerStatus === 'undefined') return;
    else{
    lockerStatus.forEach(obj => {
        if(obj.isEmpty === true) {
            if(obj.lockerType.name === "small") {
              props.setSmall(props.small+1);
              console.log("Liczem")
            }
              
  
            if(obj.lockerType.name === "medium") props.setMedium(props.medium+1)
            if(obj.lockerType.name === "large") props.setLarge(props.large+1)
        }
    });
  }}

  // Tutaj ją wywołuję 

  // useEffect(() => {
  //   fun()
  //   },props.lockerStatus);

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