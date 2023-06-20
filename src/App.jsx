import { useState, useRef, useEffect } from 'react'
import BucketList from './components/BucketList'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const local_storage_key = 'bucketList.activities'
const storedActivities = JSON.parse(localStorage.getItem(local_storage_key))

function App() {
  const [activities, setActivities] = useState(storedActivities ? storedActivities : [])
  const activityNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(activities))
  }, [activities]) 

  const toggleActivity = (id) => {
    const newActivities = [...activities]
    const activity = newActivities.find(activity => activity.id === id)
    activity.completed = !activity.completed
    setActivities(newActivities)
  }

  const handleAddActivity = () => {
    const name = activityNameRef.current.value
    if (!name) return;
    setActivities(prev => {
      return [...prev, {id: uuidv4(), name: name, completed: false}]
    })
    activityNameRef.current.value = null
  }

  return (
    <>
      <BucketList activities={activities} toggleActivity={toggleActivity}/>
      <input ref={activityNameRef} type="text" />
      <button onClick={handleAddActivity}>Add Bucket List</button>
      <button>Clear Completed Activities</button>
      <div>0 things left to do</div>
    </>
  )
}

export default App
