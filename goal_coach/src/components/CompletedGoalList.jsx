import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompletedGoals } from '../actions';
import {completeGoalRef} from '../firebase';

class CompletedGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completedGoals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        completedGoals.push({ email, title });
      })
      this.props.setCompletedGoals(completedGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return(
      <div>
      {
        this.props.completedGoals.map((completedGoal, index) => {
          const { title, email } = completedGoal;
          return(
            <div key={index}>
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
          )
        })
      }
      <button className="btn btn-primary"
        onClick={() => this.clearCompleted()}>
        Clear All
      </button>
    </div>
    )
  }
}

function mapStateToProps(state) {
  const { completedGoals } = state;
  return { completedGoals }
}

export default connect(mapStateToProps, { setCompletedGoals })(CompletedGoalList);
