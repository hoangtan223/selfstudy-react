import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import CountdownClock from './Countdownclock.jsx';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'Dec 25, 2017'
    }
  }

  changeDeadline() {
    this.setState({
        deadline: this.state.newDeadline
    })
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
      <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={event => this.setState({
              newDeadline: event.target.value
            })}
            />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      <CountdownClock />
      </div>
    )
  }
}

export default App;
