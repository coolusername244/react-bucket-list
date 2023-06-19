export default function Activity({ activity }) {
  return (
    <div>
        <label>
            <input type="checkbox" checked={activity.completed} />
            {activity.name}
        </label>
    </div>
  )
}
