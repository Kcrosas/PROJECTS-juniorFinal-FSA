import React, { Component } from "react";
import { connect } from "react-redux";
import addStudent from "./addStudent";
import { render } from "react-dom";

import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

class _allStudent extends Component {
  constructor(props) {
    super(props);
  }

  _deleteStudent = async (studentId) => {
    try {
      await axios.delete(`/api/students/${studentId}`);
      this.props.deleteStudent(studentId);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    const { students, campuses } = this.props;
    return (
      <div id="allStudent">
        <div>
          <ul id="allStudentList">
            {students.map((e) => (
              <li key={e.id}>
                <b>{`${e.fName} ${e.lName}`}</b>
                <br />
                {`Registered School:`}
                <br />
                {` ${
                  campuses.filter((m) => m.id === e.campusId)[0]
                    ? campuses.filter((m) => m.id === e.campusId)[0].name
                    : "Not enrolled"
                }`}
                <br />
                {`GPA: ${e.gpa}`}
                <br />
                <Link to={`/students/${e.id}`}>More Details</Link>
                <hr />
                <button onClick={() => this._deleteStudent(e.id)}>
                  Delete Student
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="addStudentDiv">
          <Router>
            <Switch>
              <Route path="/" component={addStudent} />
            </Switch>
          </Router>
          <br />
          <button onClick={() => this.props.sortFirst()}>
            Sort by first name
          </button>
          <br />
          <button onClick={() => this.props.sortLast()}>
            Sort by last name
          </button>
          <br />
          <button onClick={() => this.props.sortCampus()}>
            Sort by campus
          </button>
          <br />
          <button onClick={() => this.props.sortGPA()}>Sort by GPA</button>
        </div>
      </div>
    );
  }
}

const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    deleteStudent: async (studentId) => {
      dispatch({ type: "DELETE_STUDENT", studentId });
    },
    sortFirst: () => {
      dispatch({ type: "SORT_FIRST" });
    },
    sortLast: () => {
      dispatch({ type: "SORT_LAST" });
    },
    sortCampus: () => {
      dispatch({ type: "SORT_CAMPUS" });
    },
    sortGPA: () => {
      dispatch({ type: "SORT_GPA" });
    },
  };
};
const allStudent = connect(mapState, mapDispatch)(_allStudent);

export default allStudent;
