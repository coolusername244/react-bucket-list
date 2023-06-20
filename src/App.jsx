import { useState, useRef, useEffect } from 'react'
import BucketList from './components/BucketList'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const local_storage_key = 'bucketList.activities'

// collect activities that are stored in local storage
const storedActivities = JSON.parse(localStorage.getItem(local_storage_key))

function App() {

  // set state to either what was in local storage or an empty array
  const [activities, setActivities] = useState(storedActivities ? storedActivities : [])
  
  // set use ref to fetch data from activity name input field
  const activityNameRef = useRef();

  // when the setActivities function is called, update local storage with new state
  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(activities))
  }, [activities]) 

  // when user clicks checkbox, update the completed field and update state and local storage
  const toggleActivity = (id) => {
    const newActivities = [...activities]
    const activity = newActivities.find(activity => activity.id === id)
    activity.completed = !activity.completed
    setActivities(newActivities)
  }

  // when user adds a new activity, update state and local storage
  const handleAddActivity = e => {
    e.preventDefault()
    const name = activityNameRef.current.value
    if (!name) return;
    setActivities(prev => {
      return [...prev, {id: uuidv4(), name: name, completed: false}]
    })
    activityNameRef.current.value = null
  }

  // when user clicks 'clear completed activities', remove from state and local storage
  const handleClearActivities = () => {
    const newActivities = activities.filter(activity => !activity.completed)
    setActivities(newActivities)
  }

  // show the user how many activities are left to complete
  const count = activities.filter(activity => !activity.completed).length

  return (
    <>
      <form className='user-form' onSubmit={handleAddActivity}>
        <h2 className='page-heading'>My Bucket List</h2>
        <input ref={activityNameRef} type="text" className='user-form__input' placeholder='What do you reeeeeaaaally want to do?'/>
        <div className="user-form__buttons">
          <button onClick={handleClearActivities} className='user-form__button clear'>Clear Completed</button>
          <button type='submit' onClick={handleAddActivity} className='user-form__button submit'>Add To Bucket List</button>
        </div>
      </form>
      <div>{count} things left to do</div>
      <BucketList activities={activities} toggleActivity={toggleActivity}/>
    </>
  )
}

export default App
