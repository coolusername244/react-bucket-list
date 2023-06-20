export default function Activity({ activity, toggleActivity }) {
  
  const handleClick = () => {
    toggleActivity(activity.id)
  } 

  return (
    <div>
        <label>
            <input type="checkbox" checked={activity.completed} onChange={handleClick}/>
            {activity.name}
        </label>
    </div>
  )
}
