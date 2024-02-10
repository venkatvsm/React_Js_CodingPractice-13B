// Write your code here
import './index.css'

const AppItem = props => {
  const {tabItem} = props
  const {appName, imageUrl} = tabItem
  return (
    <li className="listContainer">
      <img src={`${imageUrl}`} className="image" alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}
export default AppItem
