import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NxtSlideItems from '../NxtSlideItems'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlider extends Component {
  state = {
    sliderList: initialSlidesList,
    activeTab: initialSlidesList[0].id,
    editHeading: false,
    editDescription: false,
    heading: '',
    description: '',

    preDescripion: '',
    preHeading: '',
  }

  onAddSlide = () => {
    const {sliderList, activeTab} = this.state
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const index = sliderList.findIndex(eachItem => eachItem.id === activeTab)

    sliderList.splice(index + 1, 0, newSlide)

    this.setState(preState => ({
      sliderList: preState.sliderList,
      activeTab: newSlide.id,
    }))
  }

  onActiveTab = id => {
    this.setState({activeTab: id})
  }

  onEditHeading = () => {
    const {sliderList, activeTab} = this.state
    const currentTabHeading = sliderList.find(
      eachItem => eachItem.id === activeTab,
    )

    this.setState({
      editHeading: true,
      heading: currentTabHeading.heading,
      preHeading: currentTabHeading.heading,
    })
  }

  onEditDescription = () => {
    const {sliderList, activeTab} = this.state
    const currentTabDescripion = sliderList.find(
      eachItem => eachItem.id === activeTab,
    )

    this.setState({
      editDescription: true,
      description: currentTabDescripion.description,
      preDescripion: currentTabDescripion.description,
    })
  }

  onChangeHeading = event => {
    const {activeTab} = this.state
    this.setState({heading: event.target.value})
    this.setState(preState => ({
      sliderList: preState.sliderList.map(eachItem => {
        if (eachItem.id === activeTab) {
          return {...eachItem, heading: event.target.value}
        }
        return eachItem
      }),
    }))
  }

  onChangeDescripion = event => {
    const {activeTab} = this.state
    this.setState({description: event.target.value})
    this.setState(preState => ({
      sliderList: preState.sliderList.map(eachItem => {
        if (eachItem.id === activeTab) {
          return {...eachItem, description: event.target.value}
        }
        return eachItem
      }),
    }))
  }

  onBlurHeading = () => {
    const {preHeading, heading, activeTab} = this.state
    this.setState({editHeading: false})
    if (heading === '') {
      this.setState(preState => ({
        sliderList: preState.sliderList.map(eachItem => {
          if (eachItem.id === activeTab) {
            return {...eachItem, heading: preHeading}
          }
          return eachItem
        }),
      }))
    }
  }

  onBlurDescripion = () => {
    const {preDescripion, description, activeTab} = this.state
    this.setState({editDescription: false})
    if (description === '') {
      this.setState(preState => ({
        sliderList: preState.sliderList.map(eachItem => {
          if (eachItem.id === activeTab) {
            return {...eachItem, description: preDescripion}
          }
          return eachItem
        }),
      }))
    }
  }

  render() {
    const {
      activeTab,
      sliderList,
      editHeading,
      heading,
      description,
      editDescription,
    } = this.state
    const currentSlide = sliderList.find(eachItem => eachItem.id === activeTab)

    return (
      <div className="nxt-slider-container">
        <nav className="nxt-nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="nav-img"
          />
          <h1 className="nav-heading">Nxt Slides</h1>
        </nav>
        <button className="add-button" type="button" onClick={this.onAddSlide}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="add-logo"
          />
          <p className="add-title">New</p>
        </button>
        <div className="slide-contaxt-container">
          <ol className="slide-item-container">
            {sliderList.map((eachItem, index) => (
              <NxtSlideItems
                key={eachItem.id}
                slideDetails={eachItem}
                order={index + 1}
                isActive={eachItem.id === activeTab}
                onActiveTab={this.onActiveTab}
              />
            ))}
          </ol>
          <div className="slide-current-container">
            <div className="current-context-container">
              {editHeading ? (
                <input
                  type="text"
                  id="Heading"
                  className="search-heading"
                  value={heading}
                  onChange={this.onChangeHeading}
                  onBlur={this.onBlurHeading}
                />
              ) : (
                <h1
                  className="current-slide-heading"
                  onClick={this.onEditHeading}
                >
                  {currentSlide.heading}
                </h1>
              )}
              {editDescription ? (
                <input
                  type="text"
                  id="Description"
                  className="search-description"
                  value={description}
                  onChange={this.onChangeDescripion}
                  onBlur={this.onBlurDescripion}
                />
              ) : (
                <p
                  className="current-slide-description"
                  onClick={this.onEditDescription}
                >
                  {currentSlide.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlider
