// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {dark: true}

  isDark = () => {
    this.setState(prevState => ({dark: !prevState.dark}))
  }

  render() {
    const {dark} = this.state

    const darkMode = {
      head: 'dark-heading',
      card: 'dark-container',
      text: 'Dark Mode',
    }

    const lightMode = {
      head: 'light-heading',
      card: 'light-container',
      text: 'Light Mode',
    }

    let res

    if (!dark) {
      res = darkMode
    } else if (dark) {
      res = lightMode
    }
    const {card, head, text} = res
    return (
      <div className="main-container">
        <div className={`sub-container ${card}`}>
          <h1 className={`heading ${head}`}>Click To Change Mode</h1>
          <div>
            <button className="btn" onClick={this.isDark}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
