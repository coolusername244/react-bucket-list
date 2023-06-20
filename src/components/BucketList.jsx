import Activity from "./Activity"

export default function BucketList({ activities, toggleActivity }) {
  return (
      activities.map((activity, index) => {
      return <Activity key={index + 1} activity={activity} toggleActivity={toggleActivity}/>
    })
  )
}
