// Write your code here
import './index.css'

const TabItem = props => {
  const {tabList, changingActiveTab, ActiveTabId} = props
  const {tabId, displayText} = tabList
  const isActive = ActiveTabId === tabId ? 'colorchange' : null

  const onChange = () => {
    changingActiveTab(tabId)
  }
  return (
    <li className={`container ${isActive}`}>
      <button
        className={`headingText ${isActive}`}
        type="button"
        onClick={onChange}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
