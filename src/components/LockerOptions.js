import React, {useState} from 'react';
import './LockerOptions.css';

import LockerOptionsInactive from './LockerOptionsInactive';
import LockerOptionsActive from './LockerOptionsActive';

const LockerOptions = (props) => {

    const [toggleDisplay, setToggleDisplay] = useState(false);
    const [lockerStatus, setLockerStatus] = useState();

    const [small, setSmall] = useState(0);
    const [medium, setMedium] = useState(0);
    const [large, setLarge] = useState(0);

    const handleDisplaySwitch = (toggle) => {
        if(props.chosenLockerName === "Nazwa paczkomatu"){
            alert("Proszę wybrać paczkomat")
        }
        else setToggleDisplay(toggle);
    }

    return ( 
        <>
        {toggleDisplay
        ? <LockerOptionsActive small = {small} medium = {medium} large = {large} toggleDisplay = {toggleDisplay} changeHandler = {handleDisplaySwitch} arrLockers = {props.arrLockers} chosenLockerID = {props.chosenLockerID} lockerStatus = {lockerStatus}/>
        : <LockerOptionsInactive small = {small} medium = {medium} large = {large} setSmall = {setSmall} setMedium = {setMedium} setLarge = {setLarge} toggleDisplay = {toggleDisplay} changeHandler = {handleDisplaySwitch} arrLockers = {props.arrLockers}  chosenLockerName = {props.chosenLockerName} chosenLockerID = {props.chosenLockerID} setLockerStatus = {setLockerStatus} lockerStatus = {lockerStatus}/>
        }
        </>
     );
}
 
export default LockerOptions;