import './index.css'

const NxtSlideItems = probs => {
  const {slideDetails, isActive, onActiveTab, order} = probs
  const {heading, description, id} = slideDetails
  const activeTabClassname = isActive ? 'activeItem slide-item' : 'slide-item'
  const onClickTab = () => {
    onActiveTab(id)
  }

  return (
    <li testid={`slideTab${order}`} className={activeTabClassname}>
      <p className="number">{order}</p>
      <button className="tab-button" type="button" onClick={onClickTab}>
        <div className="item-context">
          <h1 className="item-heading">{heading}</h1>
          <p className="item-description">{description}</p>
        </div>
      </button>
    </li>
  )
}

export default NxtSlideItems
