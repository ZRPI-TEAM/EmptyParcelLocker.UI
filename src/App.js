import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import LockerOptions from './components/LockerOptions';

function App() {

  const arrLockers = [
    {
        coordinates: [51.505, -0.09],
        address: 0
    } ,

    {
        coordinates: [51.500, -0.09],
        address: 1
    } ,
    
    {
        coordinates: [51.510, -0.09],
        address: 2
    } ,

    {
        coordinates: [51.505, -0.10],
        address: 3
    } ,

    {
        coordinates: [51.505, -0.07],
        address: 4
    } 
]

  return (
    <div className="App">
        <Header />
        <Map arrLockers = {arrLockers}/>
        <LockerOptions arrLockers = {arrLockers}/>
    </div>
  );
}

export default App;
