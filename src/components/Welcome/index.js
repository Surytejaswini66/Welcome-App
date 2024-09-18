// Write your code here
import {Component} from 'react'
import './index.css'
class Welcome extends Component {
  state = {status: 'Subscribe'}
  onSubscribe = () => {
    this.setState(prev => ({
      status: prev.status === 'Subscribe' ? 'Subscribed' : 'Subscribe'
    }))
  }
  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <div className="btnContainer">
          <button className="button" onClick={this.onSubscribe}>
            {status}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
