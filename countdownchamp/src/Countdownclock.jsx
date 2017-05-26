import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class CountdownClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_seconds: 0,
      minutes: 0,
      seconds: 0
    }
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  startCountdown() {
    var seconds = this.getSeconds();
    this.getTimeCountdown(seconds);//this.getTimeCountdown(seconds);}
  }

  componentDidMount() {
     setInterval(() =>
     {
       if (this.state.total_seconds > 0)
       {
          this.getTimeCountdown(this.state.total_seconds);
       }
     }, 1000);
  }

  getTimeCountdown(total_seconds){
    var seconds = total_seconds - 1;
    console.log(seconds);
    if (seconds >= 0)
    {
      this.setState({
        total_seconds: seconds,
        minutes: parseInt(seconds / 60, 10),
        seconds: parseInt(seconds % 60, 10)
      })
    }
  }

  getSeconds(){
    var time_input = this.state.newDeadline;
    var time_arr = time_input.split(":");
    console.log(time_arr[0], time_arr[1]);
    return time_arr[0] * 60 + time_arr[1];
  }

  render() {
    return(
      <div>
        <div className="CountdownClock">Countdown: {this.leading0(this.state.minutes)}:{this.leading0(this.state.seconds)}</div>
        <Form inline>
            <FormControl
              className="Deadline-input"
              placeholder="new date"
              onChange={event => {
                this.setState({
                newDeadline: event.target.value
                })

              }}
              />
            <Button onClick={() => this.startCountdown()}>Submit</Button>
          </Form>
        </div>
    )
  }
}

export default CountdownClock;
