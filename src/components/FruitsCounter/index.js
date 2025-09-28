import './index.css'
import {Component} from 'react'

class FruitCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onMangoEat = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  onBananaEat = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">
            Bob ate <span>{mangoCount}</span> mangoes <span>{bananaCount}</span>{' '}
            bananas
          </h1>
          <div className="fruitContainer">
            <div className="topFruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.onMangoEat}
                className="button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="bottomFruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button
                onClick={this.onBananaEat}
                className="button"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
