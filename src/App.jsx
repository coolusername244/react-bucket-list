import { useState, useRef } from 'react'
import BucketList from './components/BucketList'
import uuidv4 from 'uuid/v4'
import './App.css'

function App() {

  const [activities, setActivities] = useState([])
  const activityNameRef = useRef();

  const handleAddActivity = e => {
    const name = activityNameRef.current.value
    if (!name) return;
    setActivities(prev => {
      return [...prev, {id: uuidv4(), name: name, completed: false}]
    })
    activityNameRef.current.value = null
  }

  return (
    <>
      <BucketList activities={activities}/>
      <input ref={activityNameRef} type="text" />
      <button onClick={handleAddActivity}>Add Bucket List</button>
      <button>Clear Completed Activities</button>
      <div>0 things left to do</div>
    </>
  )
}

export default App
