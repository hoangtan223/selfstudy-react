import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal.jsx';
import GoalList from './GoalList.jsx';
import CompletedGoalList from './CompletedGoalList.jsx';


class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return(
      <div style={{margin: '5px'}}>
        <h3>Goals Coach</h3>
        <hr />
        <AddGoal />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Completed Goals</h4>
        <CompletedGoalList />
        <hr />
        <button className="btn btn-danger"
          onClick={() => this.signOut()}>
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}
export default connect(mapStateToProps, null)(App);
