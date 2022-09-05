import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import LockerOptions from './components/LockerOptions';

function App() {

  const arrLockers = [
    {
        id: 0,
        coordinates: [51.505, -0.09],
        address: 0, 
        small: 0,
        medium: 0,
        large: 0
    } ,

    {
        id: 1,
        coordinates: [51.500, -0.09],
        address: 1,
        small: 1,
        medium: 1,
        large: 1
    } ,
    
    {
        id: 2,
        coordinates: [51.510, -0.09],
        address: 2,
        small: 2,
        medium: 2,
        large: 2
    } ,

    {
        id: 3,
        coordinates: [51.505, -0.10],
        address: 3,
        small: 3,
        medium: 3,
        large: 3
    } ,

    {
        id: 4,
        coordinates: [51.505, -0.07],
        address: 4,
        small: 4,
        medium: 4,
        large: 4
    } 
]

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
