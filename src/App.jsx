import BucketList from './components/BucketList'
import './App.css'

function App() {
  return (
    <>
      <BucketList />
      <input type="text" />
      <button>Add Bucket List</button>
      <button>Clear Completed Activities</button>
      <div>0 things left to do</div>
    </>
  )
}

export default App
