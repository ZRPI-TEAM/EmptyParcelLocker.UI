import React, {useState} from 'react';
import './LockerOptions.css';

import LockerOptionsInactive from './LockerOptionsInactive';
import LockerOptionsActive from './LockerOptionsActive';

const LockerOptions = (props) => {

    const [toggleDisplay, setToggleDisplay] = useState(false);

    const handleDisplaySwitch = (toggle) => {
        setToggleDisplay(toggle);
    }

    return ( 
        <>
        {toggleDisplay
        ? <LockerOptionsActive toggleDisplay = {toggleDisplay} changeHandler = {handleDisplaySwitch} arrLockers = {props.arrLockers} chosenLocker = {props.chosenLocker}/>
        : <LockerOptionsInactive toggleDisplay = {toggleDisplay} changeHandler = {handleDisplaySwitch} arrLockers = {props.arrLockers}  chosenLockerName = {props.chosenLockerName}/>
        }
        </>
     );
}
 
export default LockerOptions;