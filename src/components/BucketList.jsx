import Activity from "./Activity"

export default function BucketList(props) {
  return (
    props.activities.map((activity, index) => {
      return <Activity key={index} activity={activity} />
    })
  )
}
