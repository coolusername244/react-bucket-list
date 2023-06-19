import { useState } from 'react'
import BucketList from './components/BucketList'
import './App.css'

function App() {

  const [activities, setActivities] = useState(['activity 1', 'activity 2'])

  return (
    <>
      <BucketList activities={activities}/>
      <input type="text" />
      <button>Add Bucket List</button>
      <button>Clear Completed Activities</button>
      <div>0 things left to do</div>
    </>
  )
}

export default App
