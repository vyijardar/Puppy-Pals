import { useState } from 'react';
import { puppyList } from './data.js'
import './App.css'

function App() {


  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  console.log('puppies', puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <div className="App">
        {
          puppies.map((puppy) => {
            return <p onClick={() => {
              console.log("puppy id: ", puppy.id);
              setFeatPupId(puppy.id);
            }} key={puppy.id}>{puppy.name}</p>
          })
        }
        {featPupId && <div className='puppyInfo'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>}
      </div>

    </>
  )
}

export default App
