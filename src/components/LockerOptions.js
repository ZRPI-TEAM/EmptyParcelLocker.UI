import React, {useState} from 'react';
import './LockerOptions.css';

import LockerOptionsInactive from './LockerOptionsInactive';
import LockerOptionsActive from './LockerOptionsActive';

const LockerOptions = () => {

    const [toggleDisplay, setToggleDisplay] = useState(false);

    const handleDisplaySwitch = (toggle) => {
        setToggleDisplay(toggle);
    }

    return ( 
        <>
        {toggleDisplay
        ? <LockerOptionsActive />
        : <LockerOptionsInactive toggleDisplay = {toggleDisplay} changeHandler = {handleDisplaySwitch}/>
        }
        </>
     );
}
 
export default LockerOptions;