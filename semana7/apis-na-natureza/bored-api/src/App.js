import React from "react";
import "./styles.css";
import axios from 'axios'



export default class App extends React.Component {

  state = {
    activity: {}
  }
  
  getActivity = () => {
    axios
      .get('https://www.boredapi.com/api/activity/')
      .then((res) => {
        console.log(res.data)
        this.setState({activity: res.data})
      }).catch ((err) => {
        console.log(err)
      });
  };
  
  render () {
    const {activity, type, participants, price} = this.state.activity
    return (
      <div className="App">
        <h1>Are you boring?</h1>
        <button onClick={this.getActivity}>Click here!</button>
        <hr />
        <h3>Activity</h3>
        <p>Name: {activity}</p>
        <p>Type: {type}</p>
        <p>Participants: {participants}</p>
        <p>Price: ${price}</p>
      </div>
    );
  }
}

