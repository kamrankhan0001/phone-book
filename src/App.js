//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser]=useState('');
  const [number, setNumber]=useState('');
  const [showData, setShowData]=useState([]);

  const handleClick =()=>{
    setShowData([...showData,{user, number}])

  }


  return (
    <div className="App">
      <h1>Phone Book</h1>
      
      <label>Enter the Name</label>
      <br/><br/>
      <input  type='text' value={user} onChange={(e)=>setUser(e.target.value)}></input>
      <br/><br/>
    
      <label>Enter Phone number</label>
      <br/><br/>
      <input  type='text' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
      <br/><br/>
      
      <button onClick={handleClick}>Add contact</button>
      <br/><br/>
      <h2>Contacts</h2>
      {/* using the map function to iterate over the showData array. 
      It takes a callback function with data as the current element and i as the index. */}
      {showData.map((data, i)=>{
        return(
          // Each mapped element needs a unique 'key' for efficient rendering
          <div key={i}>
            <li>{data.user} &nbsp; {data.number}</li>
          </div>
        )
      })}
    </div>
  );
}

export default App;
