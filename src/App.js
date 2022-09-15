import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import LockerOptions from './components/LockerOptions';

function App() {

  const [arrLockers, setArrLockers] = useState([]);

// Data fetching

const getApiData = async () => {
  fetch("http://localhost:5033/ParcelLocker/all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setArrLockers(data)
      })
    }

  useEffect(() => {
    getApiData();
  }, []);



const [chosenLocker, setChosenLocker] = useState();
const [chosenLockerName, setChosenLockerName] = useState("Nazwa paczkomatu");

const handleLockerChoice = (name, id) => {
    setChosenLockerName(name);

    const obj = arrLockers.find(obj => {
        return obj.id === id;
    });
    setChosenLocker(obj)
} 

  return (
    <div className="App">
        <Header />
        <Map arrLockers = {arrLockers} handleLockerChoice = {handleLockerChoice}/>
        <LockerOptions arrLockers = {arrLockers} chosenLocker = {chosenLocker} chosenLockerName = {chosenLockerName} handleLockerChoice = {handleLockerChoice}/>
    </div>
  );
}

export default App;
